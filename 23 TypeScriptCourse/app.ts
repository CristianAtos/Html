let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string'){ //esto es necesario si usamos unknown para asignarle un valor a una variable
    userName = userInput;
}

function generateError(message: string, code:number):never{
    throw{ message:message, errorCode: code }; //Crashes script and never returns anything.
    // while (true){}   //En el caso de un while con un loop infinito nunca regresa un valor entonces es un never
}



generateError('An error ocurred!', 500)