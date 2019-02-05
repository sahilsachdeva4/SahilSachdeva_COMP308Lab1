exports.render = function (req, res) {
    var username = req.body.username;
    var session = req.session;
    session.username = username;
    if (session.username) {
        res.redirect('/feedback');
    }
    else {
        res.render('login', {});
    }
};