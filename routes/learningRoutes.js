const routes = require('express').Router()


routes.get('/',(req,res) => {
    res.render('learning.ejs')
})



module.exports = routes