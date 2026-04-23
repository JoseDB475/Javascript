
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

// let operacion= prompt(`que operacion quieres realizar?
// 1=suma
// 2=resta
// 3=multiplicacion
// 4=division`)

// let n1=Number(prompt("digite el numero 1"));
// let n2=Number(prompt("digite el numero 2"));

// if (operacion==1){
//     console.log("la suma es"  + n1+n2);
// } else if(operacion==2){
//     console.log("la resta es " + n1-n2)
// }else if(operacion==3){
//     console.log("el resultado de la multiplicacion es " + n1*n2)
// }else{
//     console.log("el resultado de la division es " + n1/n2)

// }

// let palabras = ["sol", "luna", "estrella", "cielo", "mar", "montaña", "río", "bosque", "viento", "fuego"];

// let maslarga = palabras[0];
// let mascorta = palabras[0];
// let invertido = [];


// for (let i=0; i<palabras.length; i++){
//     console.log(palabras[i] + " " + palabras[i].length + "letras");

    

    
//     if(palabras[i].length>maslarga.length){
//     maslarga = palabras[i];
// }
//     if(palabras[i].length<mascorta.length){
//     mascorta = palabras[i];

// }
// }

//  console.log("la palabra mas larga es ", maslarga);
//  console.log("la palabra mas corta es ",mascorta);

// for (let i = palabras.length - 1; i>=0; i--){
//     invertido.push(palabras[i]);
// }

// console.log(invertido);


// const estudiantes = [
//   { nombre: "Julián", apellido: "Pérez", notaFinal: 4.5 },
//   { nombre: "Valeria", apellido: "Gómez", notaFinal: 3.2 },
//   { nombre: "Mateo", apellido: "Torres", notaFinal: 5.0 },
//   { nombre: "Lucía", apellido: "Ramírez", notaFinal: 2.8 },
//   { nombre: "Andrés", apellido: "Castro", notaFinal: 4.1 }
// ];



// for (let i = 0; i<estudiantes.length; i++){

//     if(estudiantes[i].notaFinal<3.0){
//      console.log("el estudiante " + estudiantes[i].nombre + " " + "perdio ");
//     }
//    else if(estudiantes[i].notaFinal>=3.0 && estudiantes[i].notaFinal<4.0){
//     console.log("el estudiante " + estudiantes[i].nombre + " " + "debe nivelar ");
//    }
//     if( estudiantes[i].notaFinal>=4.0){
//     console.log("el estudiante " + estudiantes[i].nombre + " " +  "aprobo ");
//     }

  
// }

// switch (numero=1){
//   case 1:
//      console.log("lunes");
//      break

//   case 2:
//     console.log("martes");
//     break

//   case 3:
//     console.log("miercoles");
//     break

//   case 3:
//     console.log("jueves");
//     break

//   default:
//     break
  
// }


// let opcion= prompt(
//   `seleccione una opcion
//   1. sumar
//   2.restar
//   3.multiplicar
//   4. salir`
// );


// while(i<4){
// opcion= prompt(
//   `seleccione una opcion
//   1. sumar
//   2.restar
//   3.multiplicar
//   4. salir`
// );
// alert(`tu opcion ha sido ` + opcion)
// }

// let azar = Math.floor((Math.random() * 10) + 1);

// let estado = true;
// let intentos = 1;

// while(estado){

//   let n=Number(prompt(`un numero?`));
  

//   if(n===azar){
//     alert(`ganaste en el intento: ${intentos}`)
//     estado = false
//   }
//   else if (intentos>=5){

//     alert(`perdiste, no te quedan mas intentos`);
//     estado = false
//   } else {
//     alert(`ese no era`);
//   }

//   intentos++

// }

// let mes =Number(prompt("digita un mes"));

// let estacion= ""

// switch (mes){
//   case 1:case 2:case 12:
//       alert("estas en invierno");
//       break

//  case 3:case 4:case 5:
//   alert("estas en primavera");
//       break

//  case 6:case 7:case  8:
//   alert("estas en verano ");
//       break

//  case 9:case 10:case 11:
//   alert("estas en otoño")
//   default:
//     alert("este no es un mes");
// }
  

// let data = [2024, 2026, 3000, 2100]

// for( data = 0; i<=data.length; i++){

//   if((year % 4 == 0 && year % 100 !==0) || year % 400===0){
//   console.log(`el año es bisiesto`)
//  } else{
//   console.log(`no es`);
//  }
// }


// DOM= (Document  object model)

//  let bnt1 = document.getElementById(`bnt1`);


//  bnt1.addEventListener(`click`, ()=>{
//   alert(`boton 1`)
//   })


// let bnt2 = document.getelementBYID(`bnt2`);

// bnt2.addEventListener(`click`, ()=>{
  
// } )

const motosRapidas = [
  {
    modelo: "Dodge Tomahawk",
    cilindraje: "8277 cc (V10)",
    velocidadMaxima: "536 km/h (teórica)",
    imagen: "https://images.unsplash.com/photo-1558981806-ec527fa84c39"
  },
  {
    modelo: "Kawasaki Ninja H2R",
    cilindraje: "998 cc (sobrealimentada)",
    velocidadMaxima: "400+ km/h",
    imagen: "https://images.unsplash.com/photo-1609630875171-b1321377ee65"
  },
  {
    modelo: "MTT Turbine Superbike Y2K",
    cilindraje: "Motor Turbina Rolls-Royce",
    velocidadMaxima: "365 km/h",
    imagen: "https://images.unsplash.com/photo-1580310614729-ccd69652491d"
  },
  {
    modelo: "Suzuki GSX-1300R Hayabusa",
    cilindraje: "1340 cc",
    velocidadMaxima: "312 km/h",
    imagen: "https://images.unsplash.com/photo-1518655048521-f130df041f66"
  },
  {
    modelo: "Kawasaki Ninja ZX-14R",
    cilindraje: "1441 cc",
    velocidadMaxima: "300+ km/h (limitada)",
    imagen: "https://images.unsplash.com/photo-1558981359-219d6364c9c8"
  },
  {
    modelo: "BMW S1000RR",
    cilindraje: "999 cc",
    velocidadMaxima: "303 km/h",
    imagen: "https://images.unsplash.com/photo-1599819055807-9a7e7f1c4c3a"
  },
  {
    modelo: "Ducati Panigale V4 R",
    cilindraje: "998 cc",
    velocidadMaxima: "300+ km/h",
    imagen: "https://images.unsplash.com/photo-1605559424843-9e4c2288c76b"
  },
  {
    modelo: "Aprilia RSV4 1100 Factory",
    cilindraje: "1078 cc",
    velocidadMaxima: "300+ km/h",
    imagen: "https://images.unsplash.com/photo-1588627541420-fce3f661b779"
  },
  {
    modelo: "Honda CBR1000RR-R Fireblade",
    cilindraje: "1000 cc",
    velocidadMaxima: "300+ km/h",
    imagen: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6"
  },
  {
    modelo: "Yamaha YZF-R1",
    cilindraje: "998 cc",
    velocidadMaxima: "299 km/h (limitada)",
    imagen: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96"
  },
  {
    modelo: "MV Agusta F4 R 312",
    cilindraje: "1078 cc",
    velocidadMaxima: "312 km/h",
    imagen: "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd"
  },
  {
    modelo: "Suzuki GSX-R1000",
    cilindraje: "999 cc",
    velocidadMaxima: "299 km/h (limitada)",
    imagen: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
  },
  {
    modelo: "Kawasaki Ninja ZX-10R",
    cilindraje: "998 cc",
    velocidadMaxima: "299 km/h (limitada)",
    imagen: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366"
  },
  {
    modelo: "Ducati 1299 Panigale S",
    cilindraje: "1285 cc",
    velocidadMaxima: "300+ km/h",
    imagen: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
  }
];


 
 
let title = document.querySelector(`h1`)
let container = document.querySelector(`section`)

 title.textcontect = 'motosRapidas'





for(let i= 0; i<motosRapidas.length; i++) {
  let modelo = motosRapidas[i].modelo;
  let imagen = motosRapidas[i].imagen;
  
  
  


  container.innerHTML+= `
  <div class="card">
           <div class="img">
          
          <img src="${imagen}" alt=""> </div>
          <p>${modelo}</p>
       

      </div>
  `

}


