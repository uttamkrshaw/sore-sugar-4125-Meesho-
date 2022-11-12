let visaCard=document.getElementById("visa");

visaCard.addEventListener("click",function(){
    visa();
})

function visa(){

    window.location.href="visacard.html"
}

let masterCard=document.getElementById("master");

masterCard.addEventListener("click",function(){
    master();
})

function master(){

    window.location.href="mastercard.html"
    // let img=document.getElementById("myimg");
    // img.innerHTML=null;
    
    // let img1=document.createElement("img");
    // img1.src="https://static.zara.net/static/images/payment/payment/icon-payment-mastercard.svg";
    // img.append(img1);

}

let america=document.getElementById("amx");

america.addEventListener("click",function(){
    amx();
})

function amx(){

    window.location.href="visacard.html"
}
let rupay=document.getElementById("rupay");

rupay.addEventListener("click",function(){
    rupayPay();
})

function rupayPay(){

    window.location.href="visacard.html"
}
let net=document.getElementById("net");

net.addEventListener("click",function(){
    natBanking();
})

function natBanking(){

    window.location.href="visacard.html"
}
let upi=document.getElementById("upi");

upi.addEventListener("click",function(){
    UPI();
})

function UPI(){

    window.location.href="visacard.html"
}