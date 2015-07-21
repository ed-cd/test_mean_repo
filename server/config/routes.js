module.exports = function (app) {
    var customers = require('../controllers/customers.js');
    var products = require("../controllers/products.js");
    var orders = require("../controllers/orders");

    app.get("/", function (req, res) {
        owls.showAll(req, res);
    })

    app.get('/customers', function (req, res) {
        customers.show(req, res);
    })

    app.post("/addCustomer", function (req, res) {
        customers.add(req, res);
    })

    app.post("/removeCustomer", function (req, res) {
        customers.remove(req, res);
    })

    app.get("/products", function (req, res) {
        products.show(req, res);
    })

    app.post("/orders", function (req, res) {
        orders.add(req, res);
    })

    app.get("/orders", function (req, res) {
        orders.show(req, res);
    })
}
