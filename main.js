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



// function User(name,age,color,gender,width,height) {
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

//  let user = new User(name,age,color,gender,width,height);
//  console.log(user);
// }




function Car(name,model,year,color) {
  this.name=name;
 this.model = model;
 this.year = year;
 this.color = color;


}

let n=Number(prompt("takrorlanish kerak bo'lgan sonni kiriting:"))
for (let i = 0; i <n; i++) {
 let name = prompt("car's name:");
 let model = prompt("car's model:");
 let year = prompt("car's year:");
 let color = prompt("car's color:");

 let user = new Car(name,model,year,color);
 console.log(user);
}


// fizzbuzz misoli
// let n=Number(prompt("n sonni kiriting:"));
// for(let i=0;i<=n;i++){
//  if(n%15==0)
//  console.log("FizzBuzz");
//  else if (n%3==0)
//  console.log("Fizz");
//  else if(n%5==0)
//  console.log("Buzz");
// }