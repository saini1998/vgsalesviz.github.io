const express = require('express')
// const { env } = require('process')
const app = express()
const port = 5000 || process.env.port
const path = require('path')

app.get('/',(req,res) => {
    // res.send('Hello world')
    res.sendFile(path.join(__dirname,'index.html'))
})

app.use(express.static(path.join(__dirname,'vgSalesWebSite',)))



app.listen(port,( ) =>{
    console.log(`listening to - port ${port}`)
} )



