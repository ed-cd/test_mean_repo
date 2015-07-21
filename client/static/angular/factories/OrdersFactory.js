var OrdersFactory = function ($http) {
    var orders = [];
    var factory = {};

    factory.getOrders = function (callback) {
        $http.get('/orders').success(function (output) {
            orders = output;
            callback(orders);
        })
    }

    factory.addOrder = function (newOrder, callback) {
        $http.post("/orders", newOrder).error(function (data, status, headers, config) {
            if (status == 501) {
                flashError("Not enough stock");
            } else {
                flashError("couldnt add customer because of:" + data);
            }
        }).success(function (data, status, headers, config) {
            callback(newOrder, data.newStock);
        })
    }

    return factory;
}
