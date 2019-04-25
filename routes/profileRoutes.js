const routes = require('express').Router()
const Model = require('../models')
const userModel = Model.Users
const transactionModel = Model.Transactions
const currencyModel = Model.Currencies

routes.get('/',(req,res) => {
    userModel.findOne({
        where: {
            username: req.session.username
        },
        include: [{
            model : transactionModel,
            include : [{
                model : currencyModel
            }]
        } ]
    })
    .then(user => {
       console.log(req.session)
        res.render('profile.ejs', {
            dataUser: user
        })
    })
})



module.exports = routes