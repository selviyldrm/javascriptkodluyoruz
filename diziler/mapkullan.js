let meyveler = ["Kivi", "Muz", "Çilek", "Kayısı"]
console.log("Dizi Uzunluğu: " + meyveler.length)
var ilkMeyve = meyveler[0];
console.log("İlk Meyve: " + ilkMeyve)
let sonMeyve = meyveler[meyveler.length - 1];
console.log("Son Meyve: " + sonMeyve)

const sayilar = [2, 3, 4, 5, 10]

const yeniArray = sayilar.map(yeniDeger => {
    return yeniDeger * 2
})
console.log(yeniArray)

const maaslar = [1100, 13000, 2500, 4500, 1500, 25000, 2000]
const yeniMaaslar = maaslar.map((e) => {
    if (e > 3000)
        return e * 1, 15;
    else
        return e * 1.25;
})
console.log(yeniMaaslar)