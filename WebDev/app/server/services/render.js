exports.homeRoutes = (req,res)=>{
    res.render('index')
}

exports.adminRoutes = (req,res)=>{
    const UserAgent = req.header('User-Agent')
    /*if(UserAgent != "Skynet"){
        res.render('404')
    } else {
        res.render('admin')
    }*/
    res.render('admin')
}


