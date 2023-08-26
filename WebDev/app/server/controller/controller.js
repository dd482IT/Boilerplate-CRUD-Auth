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
    try {    
        Userdb.findOne({ Username: username, Password: password})
            .then(user =>{
                console.log(user);
                if(!user){
                    res.redirect("/admin")
                } else {
                    if(user['password']){
                        res.send("JCTF{mOngOdB_iS_A_wEbScaLe_dAtabAsE}")
                    } else {
                        res.redirect("/admin")
                    }
                }
            })
        .catch(err =>{
            console.log(err)
            res.redirect("/admin")
            //res.status(500).send({ success: false})
        })
    }
    catch (error) {
        console.log(err)
        res.status(500).send({ success: false})
    }
}