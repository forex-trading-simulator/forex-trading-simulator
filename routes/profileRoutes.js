const routes = require('express').Router()


routes.get('/',(req,res) => {
    res.render('profile.ejs')
})



module.exports = routes