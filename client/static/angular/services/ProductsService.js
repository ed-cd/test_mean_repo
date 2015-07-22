var ProductsService = function ($http) {
    var availiableProducts = null;

    this.getAvailiableProducts = function (callback) {
        if (availiableProducts === null) {
            $http.get('/availiableProducts').success(function (output) {
                availiableProducts = output;
                callback(availiableProducts);
            })
        } else {
            callback(availiableProducts);
        }
    }

    this.addProduct = function (newProduct, successCallback, errorCallback) {
        $http.post("/addProduct", newProduct).success(function (data) {
            if (data.hasOwnProperty("errors")) {
                errorCallback(data);
            } else {
                availiableProducts.push(newProduct);
                successCallback();
            }
        }).error(function (data) {
            errorCallback(data);
        })
    }
}
