//prueba con  var (variable globaL)
var numero = 40; //40
console.log(numero)

if(true){
    var numero = 50;  //50
    console.log(numero)
}
console.log(numero)  //50


//prueba con  let (variable local)
var numero = 40;    //40
console.log(numero)

if(true){
    let numero = 50;  //50
    console.log(numero)
}   
console.log(numero)  //40