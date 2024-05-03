// 1-masala

// let n=Number(prompt("takrorlanish kerak bo'lgan sonni kiriting:"))
// for(let i=0;i<n;i++){
// let UserName = prompt("Ismingizni kiriting:");
// let age = prompt("Yoshingizni kiriting:");
// let email = prompt("Emailingizni kiriting:");
// let phone = prompt("Telefon raqamingizni kiriting:");

// let obj={
//  UserName,
//  age,
//  email,
//  phone,
// }
// console.log(obj);
// }

// 2-masala



// function User(age,color,gender,width,height) {
//  this.name = name;
//  this.age = age;
//  this.color = color;
//  this.gender =gender;
//  this.width = width;
//  this.height = height;
// }

// let n=Number(prompt("takrorlanish kerak bo'lgan sonni kiriting:"))
// for (let i = 0; i <n; i++) {
//  let name = prompt("cat's name:");
//  let age = prompt("cat's age:");
//  let color = prompt("cat's color:");
//  let gender = prompt("cat's gender:");
//  let width = prompt("cats's width:");
//  let height=prompt("cats's height:");

//  let user = new User(age,color,gender,width,height);
//  console.log(user);
// }

// fizzbuzz misoli
let n=Number(prompt("n sonni kiriting:"));
for(let i=0;i<=n;i++){
 if(n%15==0)
 console.log("FizzBuzz");
 else if (n%3==0)
 console.log("Fizz");
 else if(n%5==0)
 console.log("Buzz");
}