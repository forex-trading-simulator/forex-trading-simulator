const routes = require('express').Router()
const Model = require('../models')
const userModel = Model.Users
// const currencyModel = Model.Currencies
// const transactionModel = Model.Transactions


routes.get('/',(req,res) => {
    if(req.session.isLogin === undefined){
        req.session.isLogin = false
    }
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
            req.session.isLogin = true
            req.session.username = user.username
            req.session.rupiahBalance = user.rupiahBalance
            req.session.dollarBalance = user.dollarBalance
            req.session.euroBalance = user.euroBalance
            req.session.poundsBalance = user.poundsBalance
            req.session.userId = user.id
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