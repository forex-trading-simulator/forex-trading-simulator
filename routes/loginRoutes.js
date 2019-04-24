const routes = require('express').Router()


routes.get('/',(req,res) => {
    res.render('login.ejs')
})



module.exports = routes