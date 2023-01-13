// Code your solutions in this file

//const gifts = ["teddy bear", "drone", "doll"];
//
//function wrapGifts(gifts) {
//    for (let i = 0; i < gifts.length; i++) {
//        console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
//
//   return gifts;
//}
//
//wrapGifts(gifts);

const messages = [];
const names = [];
let event = "birthday"

function writeCards(names, event) {
    for (let c = 0; c < names.length; c++) {
       messages.push(`Thank you, ${names[c]}, for the wonderful surprise gift!`);
    }
    return messages;
}

writeCards(names, "birthday");



function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }

}