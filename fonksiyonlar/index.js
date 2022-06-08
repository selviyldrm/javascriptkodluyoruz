// function printHello(name) {
//     console.log("Merhaba " + name);
// }

// function Topla(a, b) {
//     console.log(a + b);
// }

// var add = function (c, d) { //anonim fonksiyonlar
//     console.log(c + d);
// }

// printHello("Selvi");
// Topla(15, 45);
// add(4, 5)


// // var sayi1=5;
// // var sayi2=2;

// // function addition(){
// //     var sayi3=3;
// //     return sayi1+sayi2+sayi3;
// // } 

// // function printScreen1 (){
// //     console.log("İlk ekran çıktısı");
// // }

// //  function printScreen2 (){
// //    setTimeout(function(){
// // console.log("İkinci ekran çıktısı")  
// // }, 3000);
// // }

// // function printScreen3 (){
// //     console.log("Üçüncü ekran çıktısı");
// // }
// // printScreen1();
// // printScreen2();
// // printScreen3();

// function printScreen1() {
//     console.log("İlk ekran çıktısı");
// }

// function printScreen2(callback1, callback2) {
//     setTimeout(function () {
//         callback1();
//         console.log("İkinci ekran çıktısı")
//         callback2();
//     }, 1000);
// }

// function printScreen3() {
//     console.log("Üçüncü ekran çıktısı");
// }


// printScreen2(printScreen1, printScreen3);

// function mesajVer() {
//     alert("Herkese merhabalar");
// }

// mesajVer()

// // function mesajVere(ad,soyad){
// //     alert('Merhaba ${ad}  ${soyad}');
// // }
// // mesajVere("Selvi","Yıldırım")

// function Carp(e,f){
//     return e*f
// }
// sonuc=Carp(3,6)
// console.log(sonuc)

// //Arrow functions
// const carpim=(x,y)=>x*y;
// console.log(carpim(4,5));

// const karesiniAl=(sayi)=>sayi*sayi;
// console.log(karesiniAl(9))


// let experience=prompt('Kaç yıllık yazılım geliştirici tecrübeniz var')

// const developer=
// experience>5
// ?()=>alert('bir çok konuyu biliyorum')
// :()=>alert('Hiçbi şey bilmiyorum')

// developer()

// {
//     let message = 'Merhaba';
//     console.log(message);
//   }
//   console.log(message); // ??
//   //Deneyip sonuçları görebilirsiniz.
//   {
//     let message = 'Merhaba';
//     console.log(message);
//   }

//   {
//     let message = 'Hello';
//     console.log(message);
//   }
// if (true) {
//     let message = 'Merhaba';
//     console.log(message);
//   }
//   console.log(message);//hata verir

// function toplama(s,t){
//     var sonuc=s+t
//     return sonuc;
// }
// var donenSonuc=toplama(4,5)
// console.log(donenSonuc)

// const pi=3.14;
// function daireAlani(r){
//     var islem=pi*r*r;
//     return islem;
// }

// function carpma (a1, a2)
// {
//     return a1*a2;
// }

// var alan1=daireAlani(5);
// var alan2=daireAlani(6);

// var donenSonuc=carpma(alan1,alan2)
// console.log(donenSonuc)
// function Question(hobby) {
//     switch (hobby) {
//       case "car":
//         return function (name) {
//           console.log(name + " do you have a car ?");
//         };
//         break;

//       case "book":
//         return function (name) {
//           console.log(name + " what is your favorite author?");
//         };
//         break;

//       case "software":
//         return function (name, type) {
//           console.log(name + " are you interested in " + type + "?");
//         };
//         break;

//       default:
//         return function (name) {
//           console.log(name + "  how are you ?");
//         };
//         break;
//     }
//   }

//   var softwareQuestion = Question("software");
//   softwareQuestion("Cemre","nodejs");

//   function greet(who) {
//     return `Hello, ${who}!`;
//   }
//  console.log( greet("John"))

// const seriesList = list => {

//     list.forEach((series, index) => {
//       console.log(`${index+1}. ${series}`) 
//     });
//   };

//   seriesList(["Firefly", "The Mandalorian","Breaking Bad"]);

// const newArray = (nums) => {

//     const newNums = nums.map(e => {
//         if (e % 2 == 0) {
//             return e * 2
//         }
//         else if (e % 2 == 1) {
//             return e * 3
//         }
//     });
//     return newNums
// }
// console.log(newArray([1,2,3,4,5]))

// let counter = 0
// let counterDOM = document.querySelector('#counter')
// let increaseDom = document.querySelector('#increase')
// let decreaseDom = document.querySelector('#decrease')

// counterDOM.innerHTML = counter
// increaseDom.addEventListener("click",clickEvent )
// decreaseDom.addEventListener("click",clickEvent)

// function  clickEvent() {
//     console.log(this.id)
//    this.id=="increase" ?counter+=1 :counter-=1
//     counterDOM.innerHTML=counter
// }