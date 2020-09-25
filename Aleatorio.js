let text = document.getElementById("text");
let evento = document.getElementById("evento");
let mostrar = document.getElementById("mostrar");
let nGanadores = document.getElementById("nGanadores");7
let file = document.getElementById("file")

evento.addEventListener("click", function(){
    valideText();
    /*
    mostrar.innerHTML = " ";
    let array = noEmptySpace();
    let n = nGanadores.value;
    let ganadores = [];
    if(n < 1 || n > array.length){
        n = 1;
        nGanadores.value = 1;
    }
    for(let i = 0; i < n; i++){
        eleccion(array,ganadores); 
    }
    for(let i in ganadores){
        mostrar.innerHTML = mostrar.innerHTML + ganadores[i] + "\n";
    }*/
})

function valideText(){
    let ruta = file.value;
    let permitida = /(.pdf|.txt|.docx|.xlsx|.TXT|.DOCX|.PDF|.XLSX)$/i;
    if(!permitida.exec(ruta)){
        alert("archivo no permitido, intente denuevo")
        file.value = "";
        return false
    }
    else{
        alert("archivo correcto")
        let xd = file.readAsText(Blob|File)
        console.log(xd)
    }
}


function eleccion(array, ganadores){
    let aleatorio = Math.random()*100.0;
    let cantidad = array.length;
    let probabilidad = 100/cantidad;
    for(let i in array){
        let intervaloMenor = probabilidad*i;
        let intervaloMayor = probabilidad*i + probabilidad;
        if ((aleatorio >= intervaloMenor) && aleatorio<= intervaloMayor){
            ganadores.push(array[i]);
        }
    }  
    let limpiar = array.indexOf(ganadores[(ganadores.length - 1)]);
    array.splice(limpiar,1);
    return ganadores;
}

function noEmptySpace(){
    let datos = text.value.split("\n");
    for(let x in datos){
        while(datos[x] == ""){
            datos.splice(x,1);
        }
    }
    return noDateRepeat(datos);
}

function noDateRepeat(datos){
    for(let x in datos){
        for(let i in datos){
            while( i != x && datos[x] == datos[i]){
                datos.splice(i,1);
            }
        }
    }
    arreglarTextArea(datos);
    return datos
}

function arreglarTextArea(datos){
    text.value = "";
    for(let i in datos){
        text.value += datos[i] + "\n";
    }
}
