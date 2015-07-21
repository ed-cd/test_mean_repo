module.exports = (function () {
    var mongoose = require('mongoose');
    var Products = mongoose.model('Products');

    return {
        show: function (req, res) {
            Products.find({
                stock: {
                    $gte: 1
                }
            }, function (err, results) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(results);
                }
            })
        }
    }
})();
