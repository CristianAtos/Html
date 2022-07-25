// //pure functions
// let num = 123

// function toString(val){
//     num = val;
//     return val.toString();
// }

// const str = toString(num);
// console.log(typeof str) 


// const data = Object.freeze([1,2,3,4,5,6]);

// //Functions as arguments
// const addEmoji = (val) => toString(val) + '😁';

// const emojiData = data.map(addEmoji)
// console.log(emojiData); 

// //functions as return value
// const appendEmoji = (fixed) => (dynamic) => fixed + dynamic;

// const rain = appendEmoji('🌧');
// const sun = appendEmoji('🌞');

// console.log(rain,('today'));
// console.log(sun,('tomorrow'));


//CLASSES
// class Emoji {
//     private _prev;

//     constructor(private _icon){}

//     get icon(){
//         return this._icon;
//     }

//     get prev() {
//         return this._prev;
//     }

//     change(val){
//         this._prev = this._icon;
//         this._icon = val
//     }
// }

// const emoji = new Emoji('🥰')

// console.log( emoji.icon, emoji.prev)

// emoji.change('😊');
// emoji.change('😋'); 
// console.log(emoji.icon, emoji.prev)

// class Emoji{
//     static addOneTo(val){
//         return 1 + val;
//     }
// }

// Emoji.addOneTo(3);