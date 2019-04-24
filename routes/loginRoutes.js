const routes = require('express').Router()


routes.get('/',(req,res) => {
    res.render('login.ejs')
})

routes.post('/login/',(req,res) => {
    res.send(req.body)
})



module.exports = routes