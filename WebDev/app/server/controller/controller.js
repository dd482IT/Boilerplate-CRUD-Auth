var Userdb = require('../model/model');


exports.login = (req, res) =>{
    if(!req.body){
        res.status(400).send({ message : "Content can not be empty!"});
        return;
    }

    if(!req.body.username){
        res.status(400).send({ message : "Username can not be empty!"});
        return;
    }

    if(!req.body.password){
        res.status(400).send({ message : "Password can not be empty!"});
        return;
    }

    const username = req.body.username
    const password = req.body.password
    const UserAgent = req.header('User-Agent')
    
    Userdb.findOne({ username: username, password: password})
        .then(user =>{
            if(!user){
                res.redirect("/admin")
            } else {
                if(user['password']){
                    res.send("JCTF{mOngOdB_iS_A_wEbScaLe_dAtabAsE}")
                } else {
                    res.redirect("/admin")
                }
            }
            /*
            if(!user['password']){
                if(user['password'] === password){
                        res.send("JCTF{mOngOdB_iS_A_wEbScaLe_dAtabAsE}")
                } else {
                        res.redirect("/admin")
                }
            } 
            */
        })
        .catch(err =>{
            res.status(500).send({ success: false})
        })

}