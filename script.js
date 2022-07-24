// ES 6 

// uzgaruvchilar var let 

// var num = 1; Global
// let num = 2; Local
// console.log(num);


// var arr = [1, 2, 3, 4]

// for(var i = 0; i < arr.length; i++) {
//     let elem = arr[i];  bu foor loopdan chiqib kitmedi 
//     var elem = arr[i];  bu foor loopdan chiqib kitadi 
// }

// console.log(elem);



// ============ uzgarmas const

// const num = 1;
// num = 3 bunday yozish xato
// console.log(num);



//============== Array methods

// const arr = [1, 2, 3, 4];
// arr.push(5, 6) bu oxiridan quwib beradi

// arr.unshift(0)  bu bowidan quwib beradi

// arr.shift() bu boshidan bitta element ob tawedi

// arr.pop() bu oxiridan bitta element ob tawedi
// console.log(arr);


// ============= Distruktizatsiya

// const name = "Shohrux";
// const age = 19;

// console.log(name + " " + age + " yoshda") Es5
// console.log(`${name} ${age} yoshda`) Es6



// ============= Object  Distruktizatsiya

// const person = {
//     name: "Shohrux",
//     age: 19,
//     job: "Front-End dev",
//     isLanguage: {
//         kor: true,
//         rus: true,
//         uzb: true
//     }
// }
// console.log(person.name);

// Es5
// const name = person.name;
// console.log(name);


// Es6
// Distruktization 
// const {name, age, job} = person;
// const {isLanguage: {kor, rus, uzb}} = person;

// console.log(kor);




// =============== Array Distruktizatsiya

// const arr = [1, 2, 3];

// const [a, b, c, g = 4] = arr;
// console.log(g);



// ================ Try Catch Finally == if else


// "use strict"

// let i = 0;
// try{
//     i = 20;
//     throw new Error("Biz catchda xatoli kurdik")
// }
// catch(e) {
//     i = i + 10;
//     console.log(`Qayerdadir xatolik bor`, e.message); // agar werda man e ni uzin yozsam haqiqiy error chiqadi consolga
// }
// finally{
//     console.log("Finalllll !!!!!!");
// }

// console.log(i);



// try catch buyicha misolla

// let isim = "Yunus";
// if(isim !== "Yunus !") {
//     throw Error("Hatolik: -> stringda xatoli bor -> throw")
// }
// console.log(isim);


// try{
//     let num1 = 10;
//     let num2 = 0;
//     let mult = num1 / num2;
//     if(num2 === 0) {
//         throw Error("Son nolga teng bulmasin")
//     } 
//     else{
//         console.log(mult);
//     }
// }
// catch(e) {
//     console.log(e.message);
// }



// ============== Array Spread method Es 8

// const shaxarlar = ["Toshkent", "Jizzax", "Samarqand", "Buxoro"];
// console.log(shaxarlar) berda massivni ichida chiqadi
// console.log(...shaxarlar) a berda shunde chiqadi massivda emas

// const tumanlar = ["Sergeli", "Qatortol", "Chilonzor"];

// spread 2 ta massivni bitta qilib beradi

// const All = [...shaxarlar, "Choshtepa", ...tumanlar]; i kiyn berda yana yangi massiv quwsekam buladi
// console.log(...All);



// ================ Object method Spread Es 8

// spread ikkita objectni ham bitta object qilib beradi
// const shaxs1 = {
//     name: "Shohrux",
//     age: 19,
//     job: "Front-dev",
//     baby: true
// }
// const shaxs2 = {
//     name: "Aziz",
//     age: 29,
//     job: "Back-dev"
// }

// console.log({...shaxs1}, {...shaxs2});  ikkita objectga murojat 
// console.log({...shaxs1, ...shaxs2}) agar biz shunde yozsek 1-objectimiz bilan 2-objectimiz keylari bir xil 2-objectimizni 1-objectimizni ustiga yapishtiradi

// const All = {...shaxs1, ...shaxs2}; // ikkita objectni bitta qilish
// console.log(All);



// ============= Array method REST


// const arr = ["PHP", "HTML", "CSS", 1, 2, 3, 4, 5, 6, 7];
// const [PHP, HTML, CSS, ...rest] = arr;
// console.log(rest);
// console.log(...rest);


// function quw (a, b, ...rest) {
//     console.log(rest);
//     return a + b
// }
// const arr = [1, 2, 3, 4, 5];

// console.log(quw(...arr));




// ============== Object method REST

// const obj = {
//     name: "Shohrux",
//     age: 19,
//     color: "yellow",
//     gender: "man"
// }

// const {name, ...rest} = obj;
// console.log(rest);



// ============== Lineyni function 

// Es 5
// function sayhi () {
//     return "Azizbek"
// }
// console.log(sayhi());


// Es 6
// const arrowName = () => {
//     console.log("Lineyniy function");
// } 

// arrowName()


// const arrow = (a, b) => {
//     return a + b
// }

// const arrow = (a, b) => console.log( a + b );
// arrow(5, 5);


// const func2 = a => console.log(a);
// func2("Shohrux")



// ================= Assenxrom va Senxrom


// console.log("Sinxromman-1");
// setTimeout(() => {
//     console.log("Assenxromman")
// }, 0)
// console.log("Sinxromman-2");



// ================= Callback hell 

// const assenhromOqim = (son, callback) => {
//     const allNum = son + 2;
//     callback(allNum)
// }

// assenhromOqim(2, (data) => { // 4
//     console.log(data);
//     assenhromOqim(4, (data) => { // 6
//         console.log(data);
//         assenhromOqim(10, (data) => { // 12
//           console.log(data);
//         })
//     })
// })


// Promisga tayyorgarlik

// console.log("Malumotimiz yulda......");

// setTimeout(() => {
//     console.log("Backenndan ma'lumot kildi");
//     const person = {
//         name: "Shohrux",
//         age: 20
//     }
//     setTimeout(() => {
//         person.children = true;
//         console.log("Biz childrenni ma'lumotga joylashtirdik kurishingiz mumkin", person);
//     }, 2000)
// }, 2000)




// =============== PROMISE 

// console.log("Back-enddan ma'lumot kilepti .........");
// const prom = new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log("Backenddan ma'lumot kildi");
//         const person = {
//             name: "Shohrux",
//             age: 20
//         }
//         res(person)
//     }, 2000)
// })
// prom
//     .then(data => {
//         data.job = "Full-Stack dev"
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("bizda xatolik", err);
//     })


// const assenxromOqim = num => {
//     return new Promise((res, rej) => {
//         if(num == 5) {
//             res("Hammasi joyida")
//         } 
//         else {
//             rej("Son 5 ga teng emas Error")
//         }
//     })
// }

// assenxromOqim(5)
//     .then(data => {
//         console.log(data);
//     })

// tepadegini davomi

// const user = {id: 1, name: "Akmal"};  // mana bular serverdan kilepti fekiviy
// const friends = [{id: 2, name: "Zafar"}, {id: 3, name: "Abu"}]; // mana bular serverdan kilepti fekiviy


// const getUser = () => {   // assenxrom
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(user)
//         }, 1000)
//     })
// }

// const getFriends = () => {  // assenxrom
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(friends)
//         }, 1000)
//     })
// }

// getUser()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(e => {
//         console.log(e);
//     })

// getFriends()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(e => {
//         console.log(e);
//     })


// ASYNC AWAIT

// const assenxromOqim = async () => {
//     const user = await getUser();
//     const friends = await getFriends();
//     console.log(user, friends);
// }

// assenxromOqim()



// ================= Array method MAP -- FILTER

// const arr = [
//     {name: "Shohrux", age: 19, job: "Front-end"},
//     {name: "Baxa", age: 29, job: "Back-end"},
//     {name: "Lena", age: 15, job: "Full-stack"}
// ]

const arr = [1, 2, 3, 4]

const newArr = arr.map((item, index) => {
    return item * 2;
    // console.log(item);
})
console.log(newArr);


const NewArr = arr.filter((item, index) => {
    if(item % 2 === 0) {
        console.log(item);
    }
})