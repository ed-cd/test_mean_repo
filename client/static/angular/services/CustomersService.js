var CustomersService = function ($http) {
    var customers = null;

    this.getCustomers = function (callback) {
        if (customers === null) {
            $http.get('/customers').success(function (output) {
                customers = output;
                callback(customers);
            })
        } else {
            callback(customers)
        }
    }

    this.addCustomer = function (customer) {
        $http.post("/addCustomer", customer).error(function (data, status, headers, config) {
            console.error("couldnt add customer because of:" + data);
        }).success(function (data, status, headers, config) {
            customers.push(customer);
        })
    }

    this.removeCustomer = function (customer) {
        $http.post("/removeCustomer", customer).error(function (data, status, headers, config) {
            console.error("couldnt remove customer because of:" + data);
        }).success(function (data, status, headers, config) {
            customers.splice(customers.indexOf(customer), 1);
        })
    }
}
