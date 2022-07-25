function add(n1:number,n2:number, showResult:boolean, phrase:string){
    // if(typeof n1 === 'number' && typeof n2 !== 'number'){
    //     throw new Error('Incorreect input!');
    // }
    const result= n1 + n2 //Declaramos aqui porque en el consolelog se convierte en string separado.
    if (showResult){
        console.log(phrase + result)
    }
    return n1 + n2;
}

let number1:number; //No asignarle un valor pero si un tipo (Sirve para a futuro iguess)
number1 = 5;
const number2 = 2.8; //Asignar su valor y tipo desde el inicio.
const printResult = true;
let resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase)

