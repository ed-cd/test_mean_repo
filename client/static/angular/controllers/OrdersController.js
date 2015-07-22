var OrdersController = function ($scope, ProductsService, CustomersService, OrdersFactory, $timeout, _, $http) {
    $scope.customers = [];
    $scope.addOrderError = "";
    $scope.orders = [];

    CustomersService.getCustomers(function (data) {
        $scope.customers = data;
    })

    ProductsService.getAvailiableProducts(function (data) {
        $scope.products = data;
    })

    OrdersFactory.getOrders(function (data) {
        $scope.orders = data;
    })


    var flashError = function (error) {
        $scope.addOrderError = error;
        $timeout(function () {
            $scope.addOrderError = "";
        }, 1500);
    }

    $scope.addOrder = function () {
        if ($scope.newOrder != undefined && $scope.newOrder.customerName != undefined && $scope.newOrder.product != undefined && $scope.newOrder.ammount != undefined) {
            var newOrder = {
                customerName: $scope.newOrder.customerName.name,
                product: $scope.newOrder.product.name,
                ammount: $scope.newOrder.ammount,
                dateCreated: Date.now()
            }
            OrdersFactory.addOrder(newOrder, function (newOrder, newStockAfterorder) {
                $scope.orders.push(newOrder);
                $scope.newOrder = {};
                $scope.products[indexOf($scope.newOrder.product)].stock = newStockAfterorder;
            })
        } else {
            flashError("fields missing");
        }
    }
}
