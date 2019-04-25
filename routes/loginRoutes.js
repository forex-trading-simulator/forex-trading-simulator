const routes = require('express').Router()
const Model = require('../models')
const userModel = Model.Users
// const currencyModel = Model.Currencies
// const transactionModel = Model.Transactions


routes.get('/',(req,res) => {
    res.render('login.ejs')
})

routes.post('/',(req,res) => {
    userModel.findAll({
        where:{
            username : req.body.username,
            password : req.body.password
        }
    })
    .then(success => {
        res.redirect('profile')   
    })
    .catch(err => {
        res.send(err)
    })
})



module.exports = routes