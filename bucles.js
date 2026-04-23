
// DATOS DE ENTRADA (MATERIA PRIMA)

const personas= [
    {nombre:`juan david`, apellidos: `garcia rodriguez`, edad: 35, altura:1.71, peso: 76},
    {nombre:`felipe`, apellidos: `figueroa`, edad: 20, altura:1.80, peso: 85},
    {nombre:`brayan`, apellidos: `carnacado`, edad: 30, altura:1.57, peso: 73}

];

// TAREA 1-- CALCULAR IMC (INDICE DE MASA CORPORAL)

 function diagnosticar( imc ) {
     if( imc < 0 ) {
         throw new Error( `El imc ingresado de ${ imc } no es valido` );
         // console.error( `El imc ingresado de ${ imc } no es valido` );
     }
     else if( imc < 18.5 ) {
         return( 'Peso inferior al normal' );
     }
     else if ( imc < 24.9 ) {
         return( 'Normal' );
     }
     else if ( imc < 29.9 ) {
         return( 'Peso superior al normal' );
     }
     else {
         return( 'Obesidad' );
     }
 }

 diagnosticar(25);



// TAREA 2-- DIAGNOSTICAR AL PACIENTE

function calcularImc(peso, altura){

    if(peso < 9){
        throw new console.error(`verifique el valor ingresado para el peso`);  
    }

    if (altura <1.20){
            throw new error(`verifique el valor ingresado para la altura`);
        }
        
    return(peso / altura** 2 );
}

calcularImc();



Function init () {
    personas.forEach(function(persona){
    
        const imc = calcularImc(persona.peso, persona.altura);
        console.log(Math.round(imc));

    })

    }

    










// for (let i = 0 ; i<personas.length; i++){

//     // console.log(`nombre:${personas[i].peso} \napellidos:${personas[i].altura}`);

//    let imc = calculateIMC(personas[i].peso, personas[i].altura)
   
//    console.log( personas[i].nombre, `tu indice de masa corporal es `, imc ,` y `);
//     diagnostico(imc)
// }

//  function calculateIMC(peso,altura){
//      return peso/ (altura **2);
//  }

// function diagnostico (imc){
//     if (imc=18.5){

//     console.log(`esta bajo de peso `);
// }
// else if (imc>18.5 && imc<24.9){
//     console.log(`estas en el peso normal`);
// }
// else{
//     console.log(`estas en obesidad`);
// }
// }


