// 1. - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//     let accept = (a, b, c) => {
//         if(a < b && a < c) {
//             console.log(a)
//         }
//         else if(b < a && b < c) {
//             console.log(b)
//         }
//         else {
//             console.log(c)
//         }
//     }
//     accept(1,2,3)

// 2. створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
//     let accept = (a, b, c) => {
//     if(a > b && a > c) {
//         console.log(a)
//     }
//     else if(b > a  && b > c) {
//         console.log(b)
//     }
//     else {
//         console.log(c)
//     }
//     }
//     accept(150, 80, 200)

// 3.- створити функцію яка повертає найбільше число з масиву
//
//     let number = [100, 500, 1000, 50, 200];
//     let arrayMax = (arr) => {
//         let max = arr [0];
//         for(const number of arr) {
//         if(number > max) {
//             max = number;
//             }
//         }
//         return max;
//     }
// document.write(`<p> Maximun value of the analyzed array is <strong> ${(arrayMax(number))} </strong></p>`)
//
// 4.- створити функцію яка повертає найменше число з масиву
//     let nums = [1000, 2000, 5000, 200, 500];
//     let arrayMin = (arr) => {
//         let min = arr [0];
//         for(const number of arr) {
//             if(number < min) {
//                 min = number;
//             }
//         }
//         return min;
// }
// document.write(`<p>Minimum value of the analyzed array is <strong> ${(arrayMin(nums))}</strong></p>`)

// 5. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// //
//     let array = [1, 2, 10];
//     let accept = (elements) => {
//     let sum = 0;
//     for(const number of elements) {
//         sum = number + sum
//     }
//         return sum;
//     }
//
//     document.write(accept(array)) - Це чомусь не виводиться як сума :(


// 6. створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//     let arr = [1,2,3];
//     let arithmetic = (array) => {
//         let sum = [0];
//         for(const number of array) {
//             sum = number + sum;
//         }
//         return sum/arr.length
//     }
//      arithmetic(arr)


// 7. створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//     let randomNums = [40, 60, 25, 100, 200];
//     let numbers = (any) => {
//         let min = [0];
//         for (const number of any) {
//             if (min < number) {
//                 min = number;
//             }
//         }
//         return min;
//     }
//
//     numbers(randomNums)


// 8. створити функцію яка заповнює масив рандомними числами(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

//     let randomNums = (array) => {
//     for (let i = 0; i < 100; i++) {
//             array[i] = Math.round(Math.random() * 100)
//         }
// }
//
//     randomNums(80)

// 9. створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

 // let randomLimit = (array, limit) => {
 //    for(let i = 0; i < 100; i++) {
 //        array[i] = Math.round(Math.random()*limit)
 //    }
 //    return array;
 //    }
 //    document.write(randomLimit(20, 100))

// 10. Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

    //
    // let reverse = (arr) => {
    // let arr1 = [];
    // for (let i = arr.length -1; i >= 0; i--) {
    //     arr1.push(arr[i])
    // }
    // console.log(arr1)
    // }
    //
    // reverse([1, 2, 3])
