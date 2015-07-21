var ProductsService = function ($http) {
    var products = null;

    this.getProducts = function (callback) {
        if (products === null) {
            $http.get('/products').success(function (output) {
                products = output;
                callback(products);
            })
        } else {
            callback(products);
        }
    }
}
