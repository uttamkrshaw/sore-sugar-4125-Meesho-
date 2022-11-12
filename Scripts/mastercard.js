let btn=document.getElementById("lastbtn");

btn.addEventListener("click",function(){
    cardValidate()
    //console.log("new")
})



function cardValidate(){
    console.log("name")
    let cardnumber=document.getElementById("cardnumber").value;
    
    if(cardnumber.length<16 || cardnumber.length>16){
        alert("INVALID CARD")
    }

    let cardHolder=document.getElementById("holder").value;
    let month=document.getElementById("month").value;
    //console.log(month)

    let cvv=document.getElementById("CVV").value;
    if(cvv.length<3 || cvv.length>3){
        alert("INVALID CVV")
    }

    let year=document.getElementById("year").value;

    let details={
        cardnumber,
        cardHolder,
        month,
        cvv,
        year
    }

    console.log(details);
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