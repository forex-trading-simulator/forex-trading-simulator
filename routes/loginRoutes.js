const routes = require('express').Router()
const Model = require('../models')
const userModel = Model.Users
// const currencyModel = Model.Currencies
// const transactionModel = Model.Transactions


routes.get('/',(req,res) => {
    res.render('login.ejs')
})

routes.post('/',(req,res) => {
    let input = {
        username: req.body.username,
        password: req.body.password
    }
    userModel.findAll()
    .then(users => {
        if(users.username == input.username){
            if(users.password == input.password){
                res.redirect('/profile')
            }else{
                console.log('salah password')
            }
        }else{
            console.log('username salah')
        }   
    })
    .catch(err => {
        res.send(err)
    })
    res.send(req.body)
})



module.exports = routes