var myAppModule = angular.module('myApp', ['ngRoute', "underScore", "ngCacheBuster"]).config(function (httpRequestInterceptorCacheBusterProvider) {
    httpRequestInterceptorCacheBusterProvider.setMatchlist([/.*images.*/]);
});

myAppModule.config(["$routeProvider", MainRoutes]);
myAppModule.service("ProductsService", ProductsService);
myAppModule.service("CustomersService", CustomersService);
myAppModule.factory("OrdersFactory", OrdersFactory);
myAppModule.controller('CustomersController', CustomersController);
myAppModule.controller('OrdersController', OrdersController);
myAppModule.controller('ProductsController', ProductsController);
myAppModule.filter('RangeFilter', RangeFilter);
myAppModule.filter('FieldGreaterThanFilter', FieldGreaterThanFilter);
