let alisverislistem=["yumurta","ekmek","süt"]
alisverislistem.push("peynir","pasta","yoğurt") //diziye eleman ekler
alisverislistem.pop() //son elemanı siler,parametre almaz
const icerirMi=alisverislistem.includes("pasta")
//Includes metodu bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder.
// Boolean (true/false) olarak çıktı alınır.
console.log(alisverislistem)
console.log("------------------------------")
console.log(icerirMi)
console.log("------------------------------")
const yeniListem=alisverislistem.slice(0,4)
//Slice (dilimleme) metodu bir dizinin bir kısmının kopyasıyla yeni bir dizi oluşturmamızı sağlar
console.log(yeniListem)
console.log("------------------------------")

//Join= Dizi içerisinde topladığınız verileri, string (sözdizimi) olarak yazmayı sağlar.
const stringListem=alisverislistem.join(' yiyecek ')
console.log(stringListem)
console.log("------------------------------")
//Concat= farklı dizileri birleştirip tek dizi haline getirir.
const yiyecekler=["baklava","pizza","puding"]
const icecekler=["su","Kahve","Çay","Kola"]

const menu=yiyecekler.concat(icecekler)
console.log(menu)
console.log("------------------------------")
const malzemeler = ["yumurta", "un", "süt"];

malzemeler.forEach(function(malzeme, malzemeIndeksi) {
    console.log(malzeme, malzemeIndeksi);
});
console.log("------------------------------")
let sayilar=[2,3,4]
let sayi5katlari=sayilar.map(function (sayi){
    return sayi*5;
})
console.log("sayinin 5 katı: "+sayi5katlari)
console.log("------------------------------")
let dizi=[2,5,8,11,15,17]
let dizifiltre=dizi.filter(function (i){
    return i>10
})

let dizi5kati=dizifiltre.map(function (i){
    if(i>10){
        return i*5
    } 
}) 
console.log("10'dan büyük olan elemanların 5'er katı: "+dizi5kati)

console.log("------------------------------")
let dizi1=[3,6,9,14,16]

    const sonuc=dizi1.some(function (sayii){
         return sayii>5
     })
      
     if(sonuc==true){
         console.log("Beşten büyük bir eleman mevcuttur")
     }
     else{
         console.log("5'ten büyük eleman mevcut değil.")
     }
 console.log("------------------------------")
     let dizi3=[2,3,4]

     function carpim(ac,say){
         return ac*say;
     }
     const result=dizi3.reduce(carpim)
     console.log(result);