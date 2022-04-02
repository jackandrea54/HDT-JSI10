let arr1 = [0,2,4,6,8]
let arr2 = [1,3,5,7]


// Cau A

// for(let item of arr1){
//     if(item > 3){
//         console.log(item)
//     }
// }
// for(let item of arr2){
//     if(item > 3){
//         console.log(item)
//     }
// }

// Cau B

// Cach 1

// var arr = []
// for(let item of arr1)
//     arr.push(item)
// for(let item of arr2)
//     arr.push(item)

//  Cach 2
// var arr = arr1.concat(arr2)
// console.log(arr)

// Cau C

// var arr = []
// for(let item of arr1)
//     arr.push(item)
// for(let item of arr2)
//     arr.push(item)

// BUBBLE SORT
// do{
//     swapped = false
//     for(let i = 0; i < arr.length - 1; i++){
//         if (arr[i] > arr[i+1]){
//             swapped = true
//             var temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//         }
//     }
// }
// while (swapped)

// SELECTION SORT
// for(let i = 0; i < arr.length; i++){
//     for(let j = i+1; j < arr.length; j++){
//         if(arr[i] > arr[j]){
//             var temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//         }
//     }
// }
// console.log(arr.sort())
