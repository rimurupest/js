// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


    // function Cars (model, producer, year, maxSpeed, engineCapacity) {
    //     this.model = model;
    //     this.producer = producer;
    //     this.year = year;
    //     this.maxSpeed = maxSpeed;
    //     this.engineCapacity = engineCapacity;
    //
    //     this.drive = function () {
    //         console.log(`їдемо зі швидкістю ${this.maxSpeed + "км"} на годину`)
    //     }
    //
    //     this.info = function () {
    //         for (const element in this) {
    //             console.log(`${element} - ${this[element]}`)
    //         }
    //     };
    //     this.newMaxSpeed = function (newSpeed) {
    //         this.maxspeed = this.maxspeed + newSpeed;
    //     };
    //
    //     this.changeYear = function (newValue) {
    //         this.year = newValue;
    //     };
    //
    //     this.addDriver = function (driver) {
    //         this.driver = driver;
    //     };
    //
    // }
    //
    // let addCar = new Cars('Tesla model X', 'US', 2015, 155, 328);
    // console.log(addCar);
    // addCar.drive(120);
    // addCar.info();
    // addCar.newMaxSpeed(120);
    // addCar.changeYear(2015)
    // addCar.addDriver("Nadya")
    // console.log(addCar)

//    це якесь tricky завдання, взагалі не зрозуміла, глянула у відповіді і ще більше заплуталась(
//наприклад, те зі значенням інфо?


// 2./ - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//
//    class Cars {
//        constructor(model, producer, year, maxSpeed, engineCapacity) {
//            this.model = model;
//            this.producer = producer;
//            this.year = year;
//            this.maxSpeed = maxSpeed;
//            this.engineCapacity = engineCapacity;
//        }
//
//        drive() {
//            console.log(`їдемо зі швидкістю ${this.maxSpeed + "км"} на годину`)
//        }
//
//
//     info () {
//         for (const element in this) {
//             console.log(`${element} - ${this[element]}`)
//         }
//     }
//    newMaxSpeed(newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     };
//
//     changeYear(newValue) {
//         this.year = newValue;
//     };
//
//   addDriver (driver) {
//         this.driver = driver;
//     };
//
//
//    }
// //
//     let addCar = new Cars('Tesla model X', 'US', 2015, 155, 328);
//     console.log(addCar);
//     addCar.drive(120);
//     addCar.info();
//     addCar.newMaxSpeed(120);
//     addCar.changeYear(2015)
//     addCar.addDriver("Nadya")
//     console.log(addCar)
//




//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомогою циклу знайти, яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//         function Cinderella (name, age, shoeSize) {
//             this.name = name;
//             this.age = age;
//             this.shoeSize = shoeSize;
//         }
//
//         let arrCinderellas = [
//             new Cinderella("Cinderella1", 25, 35),
//             new Cinderella("Cinderella2", 22, 38),
//             new Cinderella("Cinderella3", 20, 37),
//             new Cinderella("Cinderella4", 27, 34),
//             new Cinderella("Cinderella5", 19, 36),
//             new Cinderella("Cinderella6", 24, 40),
//             new Cinderella("Cinderella7", 21, 39),
//             new Cinderella("Cinderella8", 23, 37),
//             new Cinderella("Cinderella9", 16, 35),
//             new Cinderella("Cinderella10", 18, 38),
//         ]
//     console.log(arrCinderellas)
//
//     class Prince {
//     constructor (name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
//     }
//
//     let realPrince = new Prince ("Prince Charming", 25, 36)
//
//     for (const arrCinderella of arrCinderellas) {
//     if (arrCinderella.shoeSize === 36 && arrCinderella.age === 19) {
//         console.log(`The real Cinderella had a shoe size ${arrCinderella.shoeSize}`)
//     }
//
// }
//
//    let find = arrCinderellas.find((value) =>  value.shoeSize === 36)
//         console.log(find)
//
//


