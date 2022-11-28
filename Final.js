var numeroUno;
var numeroDos;
var resultado;
var nombreUsuario;
var opcion;
var decision;
var contador;

function sumar(){
  numeroUno = prompt("Ingrese el valor del numero 1");
  numeroUno = parseInt(numeroUno); /* Transforma un valor en numero entero */
  numeroDos = prompt("Ingrese el valor del numero 2");
  numeroDos = parseInt(numeroDos);
  resultado = numeroUno + numeroDos;
  alert("El resultado de la suma es " + resultado);
}
function restar(){
  numeroUno = prompt("Ingrese el valor del numero 1");
  numeroUno = parseInt(numeroUno); /* Transforma un valor en numero entero */
  numeroDos = prompt("Ingrese el valor del numero 2");
  numeroDos = parseInt(numeroDos);
  resultado = numeroUno - numeroDos;
  alert("El resultado de la resta es " + resultado);
}
function multiplicar(){
  numeroUno = prompt("Ingrese el valor del numero 1");
  numeroUno = parseInt(numeroUno); /* Transforma un valor en numero entero */
  numeroDos = prompt("Ingrese el valor del numero 2");
  numeroDos = parseInt(numeroDos);
  resultado = numeroUno * numeroDos;
  alert("El resultado de la Multiplicacion es " + resultado);
}
function dividir(){
  numeroUno = prompt("Ingrese el valor del numero 1");
  numeroUno = parseInt(numeroUno); /* Transforma un valor en numero entero */
  numeroDos = prompt("Ingrese el valor del numero 2");
  numeroDos = parseInt(numeroDos);
  resultado = numeroUno / numeroDos;
  alert("El resultado de la division es " + resultado);
}
function contar(){
  contador = prompt("Hasta que numero queres contar");
  for(let i = 1; i <= contador; i++){
      alert(i);
  }
}


nombreUsuario = prompt("Ingresa tu nombre");
alert("Hola "+ nombreUsuario);

decision = prompt(`¿Quiere realizar una operacion?
Elegi la opcion:
1️⃣ : Si
2️⃣ : No`);
decision = parseInt(decision);


while(decision == 1){
    opcion = prompt(`Elegir una opcion del 
    1: ➕ Sumar 
    2: ➖ Restar
    3: ✖️ Multiplicar
    4: ➗ Dividir
    5: ♾️ Contar`); /* En esta linea utilizamos comillas literales o Template String */ 
    
    switch (opcion) {
        case '1':
          sumar();
          break;
        case '2':
          restar();
            break;
        case '3':
          multiplicar()
          break;
        case '4':
          dividir()
          break;
        case '5':
            contar()
          break;  
      }

        decision = prompt(`¿Desea seguir realizando una operacion?
        Elegi la opcion:
        1️⃣ : Si
        2️⃣ : No`);
        decision = parseInt(decision);
}















