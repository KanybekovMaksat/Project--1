
// const array =  [77, 45, 96, 73, 25, 53, 15, 68, 75, 58, 79, 58, 99, 21
//     , 68, 85, 58, 100, 9, 2, 67, 16, 85, 8, 1, 55, 95, 69, 93, 87, 74,
//      69, 56, 25, 22, 64, 98, 79, 36, 70, 90, 83, 44, 67, 7, 25, 48, 47, 
//      91, 76, 21, 81, 77, 48, 42, 78, 85, 47, 68, 27, 10, 92, 39, 82, 93,
//       48, 63, 29, 69, 81, 71, 47, 82, 980, 15, 643, 90, 70, 37, 68, 96, 56,
//       29, 67, 4, 54, 56, 63, 37, 83, 78, 60, 65, 16, 16, 91, 45, 84, 51, 74 ];



// bubbleSort(array)

// function bubbleSort(array){
//     for (let n = 0; n < array.length; n++) {
//         for ( let i = 0; i < array.length - 1 - n; i++ ){
//         if (array[i] > array [ i + 1]) {
//             const buff = array[i]
//             array[i] = array [i + 1]
//             array [i + 1] = buff
//         }
//     }     
//     }
//     console.log(array)
// }


// let str = "#";

// while (str.length<=7){
//     console.log(str + "\n");
//     str+="#";
// }



// let a = "орел";
// let b = "решка";

// let random = (Math.floor(Math.random() * 2) === 0) ? a: b;

// console.log(random)

let myArray = ["one", "two", "three","four",
               "five", "six", "seven","eight",]

// myString = myArray.join("one");

// // console.log(myString);

// console.log(myArray.sort());
// console.log(myArray.reverse());

// console.log(myArray.concat("ten"));
// console.log(myArray.slice(1,3))
// console.log(myArray.splice(3,5));
// console.log(myArray);

myArray.splice(2,0, "ten","eleven");
console.log(myArray)


