exports.homeRoutes = (req,res)=>{
    res.render('index')
}

exports.adminRoutes = (req,res)=>{
    // Make this check a function, if DB Connection not available, render 404. 
    if(mongoose.connection.ready){
        const UserAgent = req.header('User-Agent')
        if(UserAgent != "Skynet"){
            //res.redirect('/');
            res.render('404')
        } else {
            res.render('admin')
        }
        res.render('admin')
    } else {
        res.render('404')
    }
}


