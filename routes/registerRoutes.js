const routes = require('express').Router()


routes.get('/',(req,res) => {
    res.render('register.ejs')
})



module.exports = routes