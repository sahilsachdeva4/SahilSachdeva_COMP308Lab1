exports.render = function (req, res) {
    var session = req.session;
    if (session.username) {
        res.render('feedback', {
            emailInSession: session.username
        });
    }
    else 
    {
        res.render('login', {});
    }
};