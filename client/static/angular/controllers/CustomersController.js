var CustomersController = function ($scope, CustomersService, $timeout, _) {
    $scope.customers = [];
    $scope.addNameError = "";

    CustomersService.getCustomers(function (data) {
        $scope.customers = data;
    })

    $scope.removeCustomer = function (customer) {
        CustomersService.removeCustomer(customer);
    }

    $scope.addCustomer = function () {
        var found = _.find($scope.customers, function (customer) {
            return customer.name == $scope.newCustomer.name
        });
        if (found === undefined) {
            $scope.newCustomer.createdDate = Date.now();
            CustomersService.addCustomer($scope.newCustomer);
            $scope.newCustomer = {};
            $scope.addNameError = "";
        } else {
            $scope.addNameError = "name must be unique";
            $timeout(function () {
                $scope.addNameError = "";
            }, 1500);
        }
    }
}
