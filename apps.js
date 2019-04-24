const express = require('express')
const app = express()
const port = 3456


app.get('/',(req,res) => {
    res.send('ini halama login / register')
})







app.listen(port, () => {
    console.log('this apps running on port' + port)
})