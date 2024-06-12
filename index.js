// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me`)
//     // debugger
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bowl`);
//         debugger
//     }
//     return gifts
// }

// wrapGifts(gifts);




function writeCards(names, eventName) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message)
        
    }
    return messages
}

let result = writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
console.log(result)


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     let i = 0;
//     while(i < gifts.length) {
//         console.log(`Wrapped ${gifts[i]} and added a bowl!`);
//         i++
//     }
//     return gifts
// }
// wrapGifts(gifts);

function countDown(number) {
    let currentNumber = number;
    while (currentNumber  >= 0) {
        console.log(currentNumber);
        currentNumber--;
    }
}
countDown(10)
