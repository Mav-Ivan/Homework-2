
// task 1

// let x = 1
// let y = 2

// let res1 =  String(x) + String(y) 
// console.log(typeof res1, res1 );


// let res2 = String(!!x) + String(y)
// console.log(typeof res2, res2);

// let res3 = x < y
// console.log(typeof res3, res3);

// let res4 = parseInt(Boolean(x+y))
// console.log(typeof res4, res4);

// task 2
// let res = +prompt("Enter number :")

// res % 2 == 0 && res > 0 ? console.log("task 2.a: y") : console.log("task 2.a: n")
// res % 7 == 0 ? console.log("task 2.b: y") : console.log("task 2.b: n")

// task 3

// let arr = []
// arr[0] = 1
// arr[1] = 'string'
// arr[2] = true
// arr[3] = null
// alert(arr.length)
// let num = prompt("Enter number :")
// arr.push(num)
// alert(arr[4])
// arr.shift()
// alert(`Array = ${arr}`)

// console.log(arr.length);

// console.log(arr);

// task 4 

// let cities = ["Rome", "Lviv", "Warsaw"]
// console.log(cities.join("*"));

// task 5

// let isAdult = +prompt("Скільки тобі років :")

// isAdult > 18 ? alert("Ви досягли повнолітнього віку") : alert("Ви ще надто молоді")

// task 6 

// let s1 = +prompt("Введіть 1 сторону")
// let s2 = +prompt("Введіть 2 сторону")
// let s3 = +prompt("Введіть 3 сторону")

// !!s1 && !!s2 && !!s3 ? console.log("y") : console.log("Incorrect data")
// let p = s1 + s2 + s3 / 2
// console.log(p);
// let S = p*(p-s1)*(p-s2)*(p-s3)
// let res = Math.sqrt(S)
// console.log(res.toFixed(3));


// task 7
// option 1

let time = +prompt("Enter your local time :")

// switch(Math.round(time)){

//     case 23 :
//     case 24 :
//     case 1 :
//     case 2 :
//     case 3 :
//     case 4 :
//     case 5 :
//         alert("Доброї ночі")
//         break;
//     case 6 :
//     case 7 :
//     case 8 :
//     case 9 :
//     case 10 :
//     case 11 :
//         alert("Доброго ранку")
//     break;
//     case 12 :
//     case 13 :
//     case 14 :
//     case 15 :
//     case 16 :
//     case 17 :
//         alert("Доброго дня")
//     break;
//     case 18 :
//     case 19 :
//     case 20 :
//     case 21 :
//     case 22 :
//         alert("Доброго вечора")
//     break;

//     default:
//         alert("error")

// }

// option 2

if(time >= 23 && time <=24 || time > 0 && time <= 5){
    alert("Доброї ночі")
}else
    if(time > 5 && time <= 11){
        alert("Доброго ранку")
    }else
    if(time > 11 && time <= 17){
        alert("Доброго дня")
    }else
    if(time > 17 && time < 23){
        alert("Доброго вечора")
    }else
        alert("Error")



