const routes = require('express').Router()
const Model = require('../models')
const userModel = Model.Users
const transactionModel = Model.Transactions
const currencyModel = Model.Currencies


routes.get('/',(req,res) => {
    console.log(req.session)
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

routes.post('/buy/:id',(req,res) => {
    console.log(req.session)
    let splitedBody = req.body.BUY.split(",")
    if(req.params.id == 1) {
        if(req.session.rupiahBalance > Number(splitedBody[0] * splitedBody[1])){
            var newrupiahBalance = req.session.rupiahBalance - Number(splitedBody[0] * splitedBody[1])
            var newDollarBalance = req.session.dollarBalance + Number(splitedBody[1])
        } else {
            res.send('uangnya gak cukup')
        }
    } else if (req.params.id == 2){
        if(req.session.rupiahBalance > Number(splitedBody[0] * splitedBody[1])){
            var newrupiahBalance = req.session.rupiahBalance - Number(splitedBody[0] * splitedBody[1])
            var newEuroBalance = req.session.euroBalance + Number(splitedBody[1])
        } else {
            res.send('uangnya gak cukup')
        }
    } else if (req.params.id == 3){
        if(req.session.rupiahBalance > Number(splitedBody[0] * splitedBody[1])){
            var newrupiahBalance = req.session.rupiahBalance - Number(splitedBody[0] * splitedBody[1])
            var newPoundsBalance = req.session.poundsBalance + Number(splitedBody[1])
        } else {
            res.send('uangnya gak cukup')
        }
    }
    
    let id = req.params.id
    req.session.currencyId = id
    req.session.rupiahBalance = newrupiahBalance
    req.session.dollarBalance = newDollarBalance
    req.session.euroBalance = newEuroBalance
    req.session.poundsBalance = newPoundsBalance
    
    let newTrans = {
        userId :  req.session.userId,
        currencyId: id,
        amount:splitedBody[1],
        description: 'Membeli'
    }
    userModel.update({
        rupiahBalance : newrupiahBalance,
        dollarBalance : newDollarBalance,
        euroBalance: newEuroBalance,
        poundsBalance: newPoundsBalance
    }, {where: {
        id: req.session.userId
    }})
    transactionModel.create(newTrans)
    .then(() => {
        res.redirect('/profile')
    })
    .catch(err => {
        res.send(err)
    })
})

routes.post('/sell/:id',(req,res) => {
    console.log(req.session)
    let splitedBody = req.body.SELL.split(",")
    if(req.params.id == 1) {
        if(req.session.dollarBalance > Number(splitedBody[1])){
            var newrupiahBalance = req.session.rupiahBalance + Number(splitedBody[0] * splitedBody[1])
            var newDollarBalance = req.session.dollarBalance - Number(splitedBody[1])
        } else {
            res.send('jumlah uang gak cukup')
        }
    } else if (req.params.id == 2){
        if(req.session.dollarBalance > Number(splitedBody[1])){
            var newrupiahBalance = req.session.rupiahBalance + Number(splitedBody[0] * splitedBody[1])
            var newEuroBalance = req.session.euroBalance - Number(splitedBody[1])
        } else {
            res.send('jumlah uang gak cukup')
        }
    } else if (req.params.id == 3){
        if(req.session.dollarBalance > Number(splitedBody[1])){
            var newrupiahBalance = req.session.rupiahBalance + Number(splitedBody[0] * splitedBody[1])
            var newPoundsBalance = req.session.poundsBalance - Number(splitedBody[1])
        } else {
            res.send('jumlah uang gak cukup')
        }
    }
    let id = req.params.id
    req.session.currencyId = id
    req.session.rupiahBalance = newrupiahBalance
    req.session.dollarBalance = newDollarBalance
    req.session.euroBalance = newEuroBalance
    req.session.poundsBalance = newPoundsBalance
    let newTrans = {
        userId :  req.session.userId,
        currencyId: id,
        amount:splitedBody[1],
        description: 'Menjual'
    }
    userModel.update({
        rupiahBalance : newrupiahBalance,
        dollarBalance : newDollarBalance,
        euroBalance: newEuroBalance,
        poundsBalance: newPoundsBalance
    }, {where: {
        id: req.session.userId
    }})
    transactionModel.create(newTrans)
    .then(() => {
        res.redirect('/profile')
    })
    .catch(err => {
        res.send(err)
    })
})




module.exports = routes