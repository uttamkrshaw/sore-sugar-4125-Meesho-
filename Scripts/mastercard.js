let btn=document.getElementById("lastbtn");

btn.addEventListener("click",function(){
    cardValidate()
    //console.log("new")
})



function cardValidate(){
    let cardnumber=document.getElementById("cardnumber").value;
    let cardHolder=document.getElementById("holder").value;
    let month=document.getElementById("month").value;
    let cvv=document.getElementById("CVV").value;
    let year=document.getElementById("year").value;

    if(cardnumber.length<16 || cardnumber.length>16){
        alert("INVALID CARD")
    }else if(cvv.length<3 || cvv.length>3){
        alert("INVALID CVV")
    }

    let details={
        cardnumber,
        cardHolder,
        month,
        cvv,
        year
    }

    location.href="orderplaced.html"
}

let Cdata=JSON.parse(localStorage.getItem("bag"))||[];

let Price=0
function price(data){
    data.forEach(function(el){
        Price=Price+el.price
        console.log(Price)
         document.getElementById("total_price").innerHTML=Price
    })
}
price(Cdata)


let login_data = JSON.parse(localStorage.getItem('login_data'));

let login_logo = document.getElementById('loginID');
login_logo.innerText=login_data[0].username;
   

