exports.homeRoutes = (req, res) => {
    res.render('index')
}

exports.loginRoute = (req, res) => {
    res.render('login')
}

exports.registerRoute = (req, res) => {
    res.render('register')
}

exports.dashBoardRoute = (req, res) => {
    username = req.user.name
    res.locals.username2 = username;
    res.render('dashboard', { username: username })
}



