let isim = prompt("Kullanıcı adınızı giriniz");  // Kullanıcının ismini aldığım yer

let userName = document.querySelector(".myName"); // İsmin gireceğim yeri seçiyorum

userName.innerHTML = isim; //Kullanıcıdan aldığım ismi HTML dosyasına yazdığım yer

// Saat ve Tarih
function showTime() {
    let myclock = document.querySelector('.myClock');
    let dte = new Date();
    let saat = dte.getHours();
    let dakika = dte.getMinutes();
    let gun = dte.getDay();

    if(gun==0){
        gun = "PAZAR";
    }else if(gun==1){
        gun = "P.TESİ";
    }else if(gun==2){
        gun = "SALI";
    }else if(gun==3){
        gun = "ÇARŞAMBA";
    }else if(gun==4){
        gun = "PERŞEMBE";
    }else if(gun==5){
        gun = "CUMA";
    }else if(gun==6){
        gun = "C.TESİ";
    }
    myclock.innerHTML = `${saat}:${dakika} ${gun}` // Saati dakikayı ve günü yazdırdığım yer

}
showTime();