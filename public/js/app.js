let txtCiudad,contenido;

window.addEventListener('load',main)



function main(){
    txtCiudad=document.querySelector('#ciudad');
    contenido=document.querySelector('#contenido');
    document.querySelector('#btn').addEventListener('click',consultaTiempo)


}

function consultaTiempo(){
    
    fetch(`http://localhost:3000/weather?ciudad=${txtCiudad.value}`).then((response) => {
        response.json()
        .then((data) => {
            if (data.error) {
                contenido.innerHTML = `
                <p>Error<p>
                <p>${data.error.error}<p>
                `;
            } else {
                contenido.innerHTML = `
                <p>Todo bien<p>
                <p>${data.ciudad}<p>
                `;
            }
        })
    })
    contenido.innerHTML = `
    <p>Todo bien<p>
    `;
}