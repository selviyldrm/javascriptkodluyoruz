// const product=["Mikrofon","Kablo","Telefon","Bilgisayar","Mouse","Klavye","Ekran"]
// const newProducts=product.filter(eleman=>eleman.length>5)
// console.log(newProducts)

// const users=[
//     {fullname:"Mehmet Veli",isActive:false},
//     {fullname:"Ali Duran",isActive:false},
//     {fullname:"Ahmet Yılmaz",isActive:false},
//     {fullname:"Oğuz Şahin",isActive:false},
// ]
// const activeUsers = users.filter(user => user.isActive === true);
// console.log(activeUsers.fullName);

const person=[
    {name:"Adem",age:25,languages:["Javascript","CSS"]},
    {name:"Oğuz",age:33,languages:["Java","HTML"]}
]
const newPerson=person.filter(s=>s.age>30);
console.log(newPerson)

let filterJS = person.filter(x=>x.languages.includes("JavaScript"))
console.log(filterJS.name)