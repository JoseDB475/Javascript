
//   let nombre=prompt("dime tu nombre");
//  alert("tu nombre es" + nombre);
//  let precio=prompt("pon tu precio final");
//  alert("tu edad es" + edad);
//  let porcentaje= Number(prompt("de cuanto quieres tu descuento"));
//  let descuento = (precio * porcentaje)/100;
//  alert ("tu descuento es de" + descuento)
//  let preciofina=(precio - descuento);
//  alert("tu precio_final_es" +preciofina);
//  console.log("hola tu precio a pagar con el descuento es de " + preciofina);
//  let kilometros= Number(prompt("pon un numero en kilometros"));
//  let metros= (kilometros * 1000);
//  alert("el resultado es  " + metros + " metros");
// // convertidor edad canina
//  let edad=Number(prompt("cual es tu edad"))
//  let convertidor=(edad * 7 );
//  alert("tu edad perruna es " + convertidor)
// // convertidor de pesos a dolares
//  let pesos= Number(prompt("coloca la cantidad en pesos"));
//  let dolares=(pesos * 0.00027);
//  alert("tienes" + dolares + " dolares");
// // convertidor de grados celcius a farenheit
//  let gradoscelcius = Number(prompt("coloca grados los celcius"));
//  let gradosfarenheit= Number(gradoscelcius * 1.8) + 32;
//  alert("tienes " + gradosfarenheit + " grados farenheit");
// // calcular el areab de un cuadrado
//  let medida= Number(prompt("cual es la medida de  tu cuadrado"));
//  let area=Number ( medida * medida);
//  alert("el area del cuadrado es de " + area);
// // calcular el perimwetro de un cuadrado
//  let mide= Number(prompt("cuanto mide tu cuadrado"));
//  let perimetro= Number(mide + mide);
//  alert("el perimetro de tu cuadrado es de " + perimetro);
// // convertidor de minutos a segundos
//  let minutos=Number(prompt("cuantos minutos tienes"));
//  let segundos=(minutos*60);
//  alert("tienes " + segundos + "segundos");

// // area del triangulo

// let base= Number(prompt("cual es la base de tu triangulo"));
// let altura= Number(prompt("cual es la altura de tu triangulo"));
// let areatriangulo=(base * altura)/2;
// alert("el area de tu triangulo es " + areatriangulo);



// let personas= Number(prompt`numero de personas`);
// let costocena=Number(prompt("cuanto costo la cena"));
// let quiencomiomas=(prompt("quien comio mas"))
// let quiencomiomenos=(prompt("quien comio menos"))

// let total1=(costocena (personas+ 1));
// let total2=(costocena *2);
// let total3=(costocena /2)



// let personas= Number(prompt`numero de personas`);
// let costocena=Number(prompt("cuanto costo la cena"));
// let quiencomiomas=(prompt("quien comio mas"))
// let quiencomiomenos=(prompt("quien comio menos"))

// total1=(costocena/personas / 2 + 1);
// total2=(costocena/(personas));
// total3=(costocena/(personas)-0.5);
// alert(" la cena costo  "  + costocena + "juan comio mas por lo tanto, debe pagar " + total1 + "pedro comio menos por lo tanto, debe pagar " + total3 + "los demas deben pagar " + total2);


// let monto=Number(prompt("dijita el monto"));
// let meses=Number(prompt("a cuantos meses"));
// let tazainteres= (monto * (0.10 / 12));

// let ganancias= (meses * tazainteres);

// alert( "tus ganancias a " + meses + " es de " + ganancias);




// let nota1=Number(prompt("cual es tu primer nota"))
// let nota2=Number(prompt("cual es tu segunda nota"))
// let nota3=Number(prompt("cual es tu segunda nota"))
// let nota4=Number(prompt("cual es tu cuarta nota"))
// let nota5=Number(prompt("cual es tu quinta nota"))


// let promedio=(promedio.nota1,nota2,nota3,nota4,nota5)

// console.log(nota1 + nota2 + nota3 + nota4 + nota5/5)

// 1.cuanto costo el producto
// 2.si el producto cuesta menos de 100, se le va a dar un aumento aumento del 10%
// 3.si cuesta entre el 100-200 se le hace un descuento del 20%
// 4.si cuesta mas de 200 se le hace un descuento de 25%

// let costoproducto = Number(prompt("ingrese el costo del producto"))
// let costofinal=costoproducto*0.10
// let costofinal1= costoproducto*0.20
// let costofinal2=costoproducto*0.25

// let total=[]

// if (costoproducto<100000){
//     total=costoproducto + costofinal 
// }else if(costoproducto>=100000 && costoproducto<=200000){
//     total= costoproducto + costofinal1
// } else{
//     total= costoproducto - costofinal2
// }

// console.log(total)

let operacion= prompt(`que operacion quieres realizar?
1=suma
2=resta
3=multiplicacion
4=division`)

let n1=Number(prompt("digite el numero 1"));
let n2=Number(prompt("digite el numero 2"));

if (operacion==1){
    console.log("la suma es"  + n1+n2);
} else if(operacion==2){
    console.log("la resta es " + n1-n2)
}else if(operacion==3){
    console.log("el resultado de la multiplicacion es " + n1*n2)
}else{
    console.log("el resultado de la division es " + n1/n2)

}