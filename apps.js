const express = require('express')
const app = express()
const port = 3456
const learningRoutes = require('./routes/learningRoutes')
const loginRoutes = require('./routes/loginRoutes')
const profileRoutes = require('./routes/profileRoutes')
const registerRoutes = require('./routes/registerRoutes')
const tradingRoutes = require('./routes/tradingRoutes')
const session = require('express-session')

app.use(express.urlencoded({extended : false}))

app.use(session ({
    secret:'forex',
    resave: false
}))

app.get('/',(req,res) => {
    res.render('home.ejs')
})

app.use('/learning', learningRoutes)
app.use('/login', loginRoutes)
app.use('/profile', profileRoutes)
app.use('/register', registerRoutes)
app.use('/trading', tradingRoutes)









app.listen(port, () => {
    console.log('this apps running on port' + port)
})