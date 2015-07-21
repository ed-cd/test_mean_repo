module.exports = (function () {
    var mongoose = require('mongoose');
    var Orders = mongoose.model('Orders');

    return {
        show: function (req, res) {
            Orders.find({}, function (err, results) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(results);
                }
            })
        },
        add: function (req, res) {
            Orders.create(req.body, function (err) {
                if (err) {
                    res.sendStatus(400);
                } else {
                    res.sendStatus(200);
                }
            })
        }
    }
}())
