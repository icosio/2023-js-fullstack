const n1= document.querySelector('#primer-numero')
const n2= document.querySelector('#segundo-numero')
//operaciones

const sum = document.querySelector('#sum-button')
const diff = document.querySelector('#diff-button')

//RESULTADO
const resultNode = document.querySelector('#resultado')


diff.addEventListener('click',function(){
    // parsear a entero cada texto del input
    const n1int = parseInt(n1.value)
    const n2Int = parseInt(n2.value)
    //realizar la  operacion
    const result = n1int - n2Int
    console.log(result);
    
    //ceramos nodo <span>  y lo combinamos con el resultado
    const textNode = document.createTextNode(result)
    const spanElement =document.createElement('span')
    spanElement.appendChild(textNode)
    //eliminamos reusltado previo
    if (resultNode.childNodes.legth>3){
        resultNode.removeChild(resultNode.childNodes[3])
    }
    resultNode.appendChild(spanElement)
 }
 )
 
 

sum.addEventListener('click', function () {
    // transformamos a entero el contenido de cada input
    const n1Int = parseInt(n1.value)
    const n2Int = parseInt(n2.value)
    // operación
    const result = n1Int + n2Int
    console.log(result);
    // creamos nodo <span> y lo combinamos con el resultado
    const textNode = document.createTextNode(result)
    const spanElement = document.createElement('span')
    spanElement.appendChild(textNode)

    // eliminamos resultado previo
    if(resultNode.childNodes.length>3){
        resultNode.removeChild(resultNode.childNodes[3])
    }

    resultNode.appendChild(spanElement)
})


console.log ("hola mundo desde JavaScript  ");