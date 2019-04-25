const routes = require('express').Router()
const Model = require('../models')
const userModel = Model.Users
// const currencyModel = Model.Currencies
// const transactionModel = Model.Transactions


routes.get('/',(req,res) => {
    res.render('login.ejs')
})

routes.post('/',(req,res) => {
    userModel.findOne({
        where:{
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(user => {
        if(user){
            res.redirect('/profile')
        } else {
            res.send('salah username/password')
        }
    })
    .catch(err => {
        res.send(err)
    })
})



module.exports = routes