const path = require('path')
const express = require('express')
const axio = require('axios')

const modulo = require('./modulo')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))


app.get('',(req,res)=>{

})


app.get('/weather', (req, res) => {
    if (!req.query.ciudad) {
        return res.send({
            error: 'Debe de poner una ciudad'
        })
    }
    if(req.query.ciudad){
        modulo.obtenerClima(req.query.ciudad,(objeto)=>{
            return res.send(objeto);
        })
    }
})

app.listen(3000, () => {
    console.log('Servidor encendio. Puerto ==> 3000')
})