const routes = require('express').Router()
const Model = require('../models')
const userModel = Model.Users
const currencyModel = Model.Currencies
const transactionModel = Model.Transactions


routes.get('/',(req,res) => {
    res.render('register.ejs')
})

routes.post('/',(req,res) => {
    let inputData = {
        firstName : req.body.first_name,
        lastName : req.body.last_name,
        email : req.body.email,
        username : req.body.username,
        password : req.body.password,
        rupiahBalance : 10000000,
        dollarBalance : 0,
        euroBalance : 0,
        poundsBalance : 0,
    }
    userModel.create(inputData)
    .then(gotData => {
        res.redirect('/login')
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = routes