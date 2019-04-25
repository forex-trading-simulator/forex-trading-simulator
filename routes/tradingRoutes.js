const routes = require('express').Router()
const Model = require('../models')
const userModel = Model.Users
const transactionModel = Model.Transactions
const currencyModel = Model.Currencies


routes.get('/',(req,res) => {
    currencyModel.findAll()
    .then(gotData => {
        res.render('trading.ejs',{
            sendCurrent : gotData
        })

    })
    .catch(err => {
        res.send(err)
    })
})



module.exports = routes