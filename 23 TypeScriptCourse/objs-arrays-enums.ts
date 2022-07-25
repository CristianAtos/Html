// const person: {
//     name: string;
//     age: number
//     } = {
    // const person: {  //<--el weno 
    //     name:string,
    //     age: number,
    //     hobbies: string[]; //array of strings
    //     role: [number, string] //tuple el primero debe ser numero y el segundo string, y solo puede ser de tamaño 2!
    // }= {
    //     name: 'Maximilian',
    //     age: 30,
    //     hobbies: ['Sports' , 'Cooking'], //array
    //     role: [2, 'author'] //tupla
    // }

    // const ADMIN = 0;
    // const READ_ONLY = 1;
    // const AUTHOR =2;

    enum Role {
        ADMIN='ADMIN',
        READ_ONLY= 100,
        AUTHOR= 'AUTHOR'
    };

    const person ={
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN 
    }


// person.role.push('admin'); //push es una excepcion para las tuplas, pero en este caso es malo porque no cumple con nuestras reglas. (L14)
// person.role[1]= 10

// person.role = [0, 'admin', 'user'];//no funciona porque rompe la regla de 2 valores solamente (L14)



let favoriteActivities:string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map())// !!! ERROR !!!
}

if (person.role === Role.AUTHOR){
    console.log('is read only')
}