var ProductsFactory = function ($http) {
    var products = [];
    var factory = {};

    factory.getProducts = function (callback) {
        $http.get('/products').success(function (output) {
            products = output;
            callback(products);
        })
    }
    return factory;
}
