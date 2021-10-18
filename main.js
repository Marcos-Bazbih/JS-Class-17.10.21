//! צרו מחלקה של רכב עם שדות של חברה ושנת ייצור.
//! צרו פונקציה סטטית שמקבלת 2 אובייקטים ומחזירה את הרכב החדש ביותר.
//! הוסיפו יכולת למחלקה שסופרת כמה מכוניות נוצרו, בדקו את המונה בלוג.
//! הוסיפו שדה של מספר כוכבים, השדה הוא מספר רגיל.
//! צרו פונקציה סטטית שמקבלת 2 אובייקטים ומחזירה את החברה עם מספר הכוכבים הגדול יותר.


// class Car {
//     brand;
//     year;
//     stars;
//     static counter = 0;
//     constructor(brand, year, stars) {
//         this.brand = brand;
//         this.year = year;
//         this.stars = stars;
//         Car.counter++;
//     };
//     static getNewerCar(car1, car2) {
//         return car1.year > car2.year ? car1 : car2
//     };

//     static getMoreStars(car1, car2) {
//         return car1.stars > car2.stars ? car1.brand : car2.brand
//     };
// };

// const car1 = new Car("BMW", 2006, 3);
// const car2 = new Car("KIA", 2011, 2);
// const car3 = new Car("MAZDA", 2000, 5);
// const car4 = new Car("HONDA", 1968, 1);

// console.log(Car.counter);

// console.log(Car.getNewerCar(car1, car2));
// console.log(Car.getMoreStars(car3, car4));



//! צרו מחלקה של חתול עם שדות של שם, גיל וצבע.
//! צרו מחלקות של אריה, נמר ופומה שיורשות ממחלקת חתול.
//! הוסיפו באריה שדה של משקל ובנאי מתאים.
//! הוסיפו במחלקה חתול פונקציה של השמעת קול, הפונקציה מחזירה "קוראים לי {השם}, מיאו" באנגלית.
//! הוסיפו במחלקה חתול פונקציה שמחזירה את כל השדות בטקסט מורכב.
//! במחלקת אריה , הוסיפו פונקציה שמדפיסה את כל הנתונים של האריה.

// class Cat {
//     name;
//     age;
//     color;
//     constructor(name, age, color) {
//         this.name = name;
//         this.age = age;
//         this.color = color;
//     };
//     makeSound(){
//         return `My name is ${this.name}, Meow`
//     };
//     getKeys(){
//         return `name:${this.name}, age:${this.age}, color:${this.color}`
//     };
// }

// class Lion extends Cat {
//     weight;
//     constructor(name, age, color, weight) {
//         super(name, age, color);
//         this.weight = weight;
//     };
//     getKeys(){
//         for(let key in this){
//             console.log(key + " " + this[key]);
//         }
//     };
// };

// class Tiger extends Cat {
//     constructor(name, age, color) {
//         super(name, age, color);
//     };
// };

// class Puma extends Cat {
//     constructor(name, age, color) {
//         super(name, age, color);
//     };
// };

// let lion1 = new Lion("lion1", 5, "red", 20);
// let tiger1 = new Tiger("tiger1", 3, "blue");
// let puma1 = new Puma("puma1", 8, "green");

// lion1.getKeys();

//! 1.	צרו מחלקה עם 3 שדות ופונקציה סטטית אחת,2 שדות
//! טקסט ושדה מספר אחד, הפונקציה היא פונקציית random
//! מותאמת לפי הנתונים שהמחלקה מקבלת בבנאי. לדוג':
//! במידה והמספר הוא 1000 אז המספר שיחזור יהיה בין 0 ל 999 .

// class Dog{
//     name;
//     age;
//     color;
//     constructor(name, age, color){
//         this.name = name;
//         this.age = age;
//         this.color = color;
//     }
//     static random(dog){
//         return Math.floor(Math.random()*dog.age) 
//     }
// }

// let dog1 = new Dog("pitbull", 25, "red");

// console.log(Dog.random(dog1));

//! 2.	כתבו תוכנית שמקבלת מהמשתמש נתונים של שם,
//! סיסמה, מייל ושם משתמש. התוכנית יוצרת מופע של משתמש.

// const form = document.getElementById("form");
// const name = document.getElementById("name");
// const userName = document.getElementById("userName");
// const password = document.getElementById("password");
// const email = document.getElementById("email");

// class User {
//     name;
//     userName;
//     password;
//     email;
//     constructor(name, userName, password, email) {
//         this.name = name;
//         this.userName = userName;
//         this.password = password;
//         this.email = email;
//     };
// };

//! לאחר מכן היא משווה בין שני אובייקטים, כדי לקבוע האם
//! הראשון מכיל ערכי מאפיינים שווי ערך לזה השני. אחד
//! מהאובייקטים ניצור ידנית בקוד (הארדקודד).

// let user2 = new User("haim", "haim", 123, "haim@gmail.com");

// form.onsubmit = (event) => {
//     event.preventDefault();
//     let user1 = new User(name.value, userName.value, password.value, email.value);
//     console.log(user1);

//     for (let key in user1) {
//         user1[key] == user2[key] ? console.log("yes") : console.log("no");
//     }
// };


// ! צרו מחלקה של יישוב עם שדות של מס תושבים ושם.
// ! בנו פונקציה שמחזירה את הפרטים בטקסט אחד.
// ! לאחר מכן צרו מחלקה של מדינה, עיר וכפר, המחלקות
// ! יורשות מהמחלקה יישוב.
// ! הוסיפו לכל מחלקה פונקציה שקוראת לפונקציה ממחלקת
// ! ההורה ומחזירה את הטקסט עם סוג היישוב .
// ! צרו פונקציה סטטית במחלקה יישוב שמקבלת מספר
// ! אובייקטים ומחזירה את האובייקט עם מספר התושבים הגדול ביותר.
// ! צרו טופס שמקבל נתונים מהמשתמש ועל פי הטופס יוצרת
// ! את האובייקט המתאים ומוסיפה אותו לטבלה מתחת לטופס.


// class Settlement {
//     name;
//     numberOfPeople;
//     constructor(name, numberOfPeople) {
//         this.name = name;
//         this.numberOfPeople = numberOfPeople;
//     };
//     printDetails() {
//         return `name:${this.name}, number Of People:${this.numberOfPeople}`;
//     };
//     static getMostPeople(array) {
//         let max = array[0];
        
//         for (let i = 0; i < array.length; i++) {
//             if (array[i].numberOfPeople > max.numberOfPeople) {
//                 max = array[i];
//             };
//         };
//         return max;
//     };
// };

// class State extends Settlement {
//     printDetails() {
//         return super.printDetails() + " " + "State"
//     }
// };

// class City extends Settlement {
//     printDetails() {
//         return super.printDetails() + " " + "City"
//     }
// };

// class Village extends Settlement {
//     printDetails() {
//         return super.printDetails() + " " + "Village"
//     }
// };

// const settlement1 = new State("Ashdod", 400000);
// const settlement2 = new Village("Natania", 250000);
// const settlement3 = new City("Haifa", 150000);
// const settlement4 = new State("K-Y", 50000);
// const settlement5 = new Village("Rishon", 10);
// const settlement6 = new City("Jerusalem", 1000000);


// const array = [settlement1, settlement2, settlement3, settlement4, settlement5, settlement6];
// console.log(array);

// console.log(settlement1.printDetails());
// console.log(settlement2.printDetails());
// console.log(settlement3.printDetails());


// console.log(Settlement.getMostPeople(array));


// const form = document.getElementById("form");
// const inputName = document.getElementById("inputName");
// const inputNum = document.getElementById("inputNum");
// const select = document.getElementById("select");


// form.onsubmit = ((event) => {
//     event.preventDefault();
//     let newSettlement;

//     switch (select.value) {
//         case "City":
//             newSettlement = new City(inputName.value, inputNum.value);
//             break;
//         case "State":
//             newSettlement = new State(inputName.value, inputNum.value);
//             break;
//         case "Village":
//             newSettlement = new Village(inputName.value, inputNum.value); 
//             break;
//         default:
//             break;
//     }
//     console.log(newSettlement);

//     table.innerHTML += `<tr> <td>${newSettlement.name}</td> <td>${select.value}</td> <td>${newSettlement.numberOfPeople}</td></tr>`
// })