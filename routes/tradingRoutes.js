const routes = require('express').Router()
const Model = require('../models')
const userModel = Model.Users
const currencyModel = Model.Currencies
const transactionModel = Model.Transactions

routes.get('/',(req,res) => {
    currencyModel.findAll()
    .then(data => {
        console.log(data)
    })
    res.render('trading.ejs')
})

routes.get('/beli/:currencyId', (req, res) => {
   
})

routes.post('/beli/:currencyId', (req, res) => {
    
})

routes.get('/jual/:currencyId', (req, res) => {

})

routes.post('/jual/:currencyId', (req, res) => {
    
})


module.exports = routes