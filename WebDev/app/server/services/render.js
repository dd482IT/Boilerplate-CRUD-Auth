exports.homeRoutes = (req,res)=>{
    res.render('index')
}

exports.adminRoutes = (req,res)=>{
    // Make this check a function, if DB Connection not available, render 404. 
        //const UserAgent = req.header('User-Agent')
        //if(UserAgent != "Skynet"){
            //res.redirect('/');
        //    res.render('404')
        //} else {
            res.render('admin')
        //}
        res.render('admin')
}

exports.registerRoute = (req,res)=>{
    res.render('register')
}


