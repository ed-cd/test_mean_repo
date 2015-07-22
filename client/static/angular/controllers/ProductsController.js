var ProductsController = function ($scope, ProductsService, $timeout, _, $http) {
    $scope.customers = [];
    $scope.addOrderError = "";
    $scope.orders = [];
    $scope.addProductErrors = [];

    ProductsService.getAvailiableProducts(function (data) {
        $scope.products = data;
    })


    var flashError = function (error) {
        $scope.addOrderError = error;
        $timeout(function () {
            $scope.addOrderError = "";
        }, 1500);
    }

    $scope.addProduct = function () {
        ProductsService.addProduct($scope.newProduct, function () {
            $scope.newProduct = {};
        }, function (data) {
            $scope.addProductErrors = [];
            for (var error in data.errors) {
                $scope.addProductErrors.push(data.errors[error].message);
            }
        })
    }
}
