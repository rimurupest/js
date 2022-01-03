// 1. Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
//     let n1 = 'Harry..Potter';
//     let validName = (n1) => {
//         return n1.replace("..", " ");
//
//     }
// console.log(validName(n1))
// //
//     let n2 = 'Ron---Whisley';
//     let validName = (n2) => {
//         return n2.replace("---", " ")
//     }
//     console.log(validName(n2))

    // let n3 = 'Hermione__Granger';
    // let validName = (n3) => {
    //     return n3.replace("__", " ")
    // }
    // console.log(validName(n3))
//
//    2. - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

    // let numbersArr = (num1, num2) => {
    //     let array = [];
    //     for(let i = 0; i < num2; i++) {
    //         array.push(Math.round(Math.random()*num2))
    //
    //     }
    //     return array;
    // }
    // console.log(numbersArr(0, 100));
    //

// 3. створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//     let randomNums = (a, b) => {
//     let array = []
//         for(let i = 0; i < b;) {
//           array.push(Math.round(Math.random()*a))
//         }
//         return array.sort((a, b) => a - b);
//
//     }
//
//
//     randomNums(1, 100)

// 4. створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let randomNums = (a, b) => {
//     let array = []
//         for(let i = 0; i < b;) {
//           array.push(Math.round(Math.random()*a))
//         }
//
//         return array.filter(value => value % 2 === 0);
//
//     }
//
// //
//     randomNums(1, 100)


// 5.створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let randomNums = (a, b) => {
//     let array = []
//         for(let i = 0; i < b;) {
//           array.push(Math.round(Math.random()*a))
//         }
//
//         return array.map(value => value.toString());
//
//     }
//
// //
//     randomNums(1, 100)


// 6. створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]


//
// let sortNums = (direction) => {
//     let arr = [11, 21, 3];
//     if(direction === "ascending") {
//         for (let i = 0; i < arr.length;) {
//             console.log(++i)
//         }
//     }
//     if(direction === "descending") {
//         for (let i = 0; i < arr.length;) {
//             console.log(i--)
//         }
//     }
// }
// sortNums("ascending")



    let sortNums = (array, direction ) => {
        if (direction === "ascending")
            return array.sort((a, b) => a - b);
            if (direction === "descending")
                return array.sort((a, b) => b - a);


    }
console.log(sortNums[11, 21, 3])




// 7. - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}]
//
//     let sort = coursesAndDurationArray.sort((x, y) => x.monthDuration - y.monthDuration);
//
//
// console.log(sort);

//  let filter = coursesAndDurationArray.filter(value => {
//      if(value.monthDuration > 5) {
//          return value.monthDuration;
//      }
//  })
// console.log(filter)