const {httpStatus} = require('../constant/HttpResponse')
const userModel = require('../models/users.model');


/* This function is used to create admin */
exports.adduser = (req, res, next) => {
    try{
        if(req.body && req.body.first_name && req.body.last_name && req.body.email && req.body.organization){
            let first_name = req.body.first_name;
            let last_name = req.body.last_name;
            let organization = req.body.organization;
            let email = req.body.email;

            let userObj = {
                'first_name': first_name,
                'last_name': last_name,
                'email': email,
                'organization': organization
            }

            userModel.addUser(userObj).then(result => {
                if (result) {
                    res.status(200).json({
                        status: "success",
                        message: "User Added Successfully",
                        value: result
                    });
                } else {
                    res.status(400).json({
                        message: "Error"
                    });
                }
            })
        }
    } catch(err){

    }
}
