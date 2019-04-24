const routes = require('express').Router()


routes.get('/',(req,res) => {
    res.render('trading.ejs')
})



module.exports = routes