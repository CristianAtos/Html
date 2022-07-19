const { Observable } = require ('rxjs')
const { map, pluck, filter } = require ('rxjs/operators')

const users = {
    data: [
        {
            status: "active",
            age : 14
        },
        {
            status: "inactive",
            age : 32
        },
        {
            status: "active",
            age : 17
        },
        {
            status: "active",
            age : 23
        },
    ]
}

const users2 = {
    data: [
        {
            status: "active",
            age : 14
        },
        {
            status: "inactive",
            age : 32
        },
        {
            status: "inactive",
            age : 53
        },
        {
            status: "active",
            age : 17
        },
        {
            status: "inactive",
            age : 11
        },
        {
            status: "inactive",
            age : 32
        },
        {
            status: "inactive",
            age : 43
        },
        {
            status: "active",
            age : 23
        },
    ]
}

const observable = new Observable((subscriber) =>{
    //emitting data / value is sent to observer
    subscriber.next(users2);
    subscriber.next(users);
    subscriber.next(users2);
}).pipe( //Operators inside of the pipe
    pluck("data"),
    filter((value) => value.length >= 5),
    map((value) =>{ //step 2 
        // console.log("2) Got data from first operator", value);
        return value.filter(user => user.status === "active");
    }),
    map((value) =>{ //step 3
        // console.log("3) Got active users only", value);
        return value.reduce((sum, user) => sum + user.age, 0) / value.length;
    }),
    map((value =>{
        // console.log("4 Got data from third operator", value);
        if(value < 18) throw new Error("Average age is too young")
        return value;
    }))
) //<--- operators

const observer = {
    next: (value) =>{ console.log("Observer got a value of " + value); 
},
error: (err) =>{
    console.log("Observer got an error of " + err);
},
complete: () =>{
    console.log("Observer got a complete notification");
}
}

observable.subscribe(observer)



//webpack-dev-server --mode development"