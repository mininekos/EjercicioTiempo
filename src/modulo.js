const axios = require('axios')
const tiempo= requiere('./tiempo')

exports.obtenerClima= (ciudad,callback)=>{
    let url= `http://api.weatherstack.com/current?access_key=e64a696912e81a014d7ab2ef7de20b51&query=${ciudad}`
    axios.get(url).then((res)=>{
       
        if (res.data.success == false) {
            console.log("No funca")
            callback({
                error:"Se ha producido un error en la peticion"
            })
        } else{
            
            callback({
                ciudad: res.data.location.name,
                temperatura: res.data.current.temperature,
                humedad: res.data.current.humidity,
            })
        } 
    }

    ).catch((error)=>{
        console.log(error)
    })

}