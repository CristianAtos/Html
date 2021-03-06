import { Observable } from "rxjs";
import { Subject } from "rxjs";
import { interval } from "rxjs";
const { map, pluck, filter, skipUntil } = require ('rxjs/operators')

var observable1 = Observable.create((data:any) => {
    var i = 1
    setInterval(() =>{
        data.next(i++)
    }, 1000)
})

var observable2 = new Subject;

setTimeout(() => {
    observable2.next('Hey')
}, 3000)

var newObs = observable1.skipUntil(observable2)

newObs.subscribe((x:any) => addItem(x))

    function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}