const express = require('express')
const cors = require ('cors')

const PORT = process.env.PORT || 3010

const app = express()
app.use(cors())

const dataItems = require('./data.json')

app.get('/api/data', (req, res) =>{
    res.json({data: dataItems})
})

app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
})