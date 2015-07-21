var myAppModule = angular.module('myApp', ['ngRoute', "underScore", "ngCacheBuster"]).config(function (httpRequestInterceptorCacheBusterProvider) {
    httpRequestInterceptorCacheBusterProvider.setMatchlist([/.*images.*/]);
});

myAppModule.config(["$routeProvider", MainRoutes])
myAppModule.factory("ProductsFactory", ProductsFactory)
myAppModule.service("CustomersService", CustomersService);
myAppModule.controller('CustomersController', CustomersController);
myAppModule.controller('OrdersController', OrdersController);
myAppModule.filter('RangeFilter', RangeFilter);
