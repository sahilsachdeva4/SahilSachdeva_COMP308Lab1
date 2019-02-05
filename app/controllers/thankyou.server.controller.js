exports.render = function (req, res) {
    req.session.destroy(function (err) {
        res.render('thankyou', {});
    });
};