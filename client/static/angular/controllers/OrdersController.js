var OrdersController = function ($scope, ProductsFactory, CustomersService, $timeout, _, $http) {
    $scope.customers = [];
    $scope.addOrderError = "";
    $scope.orders = [];

    CustomersService.getCustomers(function (data) {
        $scope.customers = data;
    })

    ProductsFactory.getProducts(function (data) {
        $scope.products = data;
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

            $http.post("/orders", newOrder).error(function (data, status, headers, config) {
                flashError("couldnt add customer because of:" + data);
            }).success(function (data, status, headers, config) {
                $scope.orders.push(newOrder);
                $scope.newOrder = {};
            })
        } else {
            flashError("fields missing");
        }
    }

    $http.get('/orders').success(function (output) {
        $scope.orders = output;
    }).error(function (data, status, headers, config) {
        flashError("couldnt get orders from the database because of:" + data);
    })
}
