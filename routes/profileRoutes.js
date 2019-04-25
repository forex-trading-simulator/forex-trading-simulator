const routes = require('express').Router()
const Model = require('../models')
const userModel = Model.Users

routes.get('/',(req,res) => {
    userModel.findOne({
        where: {
            username: req.session.username
        }
    })
    .then(user => {
        res.render('profile.ejs', {
            dataUser: user
        })
    })
})



module.exports = routes