const isTrue = true

if(isTrue) {
    console.log("True")
}
else if(!isTrue) {
    console.log("False")
}
else {
    console.log("error")
}

// -------------------------------------------------------------- //

const fruta = "maracujá"

switch(fruta) {
    case "morango":
        console.log("Suco de " + fruta)
        break
    case "banana":    
        console.log("Suco de " + fruta)
        break
    case "maracujá": 
        console.log("Suco de " + fruta)
        break
    default:
        console.log("Suco de nada")
        break
}