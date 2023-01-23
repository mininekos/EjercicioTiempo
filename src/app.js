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
    console.log('entra en la pagina')
    if (!req.query.ciudad) {
        console.log('Error con la consulta')
        return res.send({
            error: 'Debe de poner una ciudad'
        })
        
    }
    if(req.query.ciudad){
        console.log('No hay consulta')
        modulo.obtenerClima(req.query.ciudad,(objeto)=>{
            return res.send(objeto);
        })
        
    }
})

app.listen(3000, () => {
    console.log('Servidor encendio. Puerto ==> 3000')
})