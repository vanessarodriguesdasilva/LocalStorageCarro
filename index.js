function Enviar(){
    let modelo = document.getElementById("Modelo").value
    let marca =  document.getElementById("Marca").value 

    const carro ={
        Modelo: modelo,
        Marca: marca
    }

    localStorage.setItem("const", JSON.stringify(carro))

}