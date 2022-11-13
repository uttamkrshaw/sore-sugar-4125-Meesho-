let btn=document.getElementById("lastbtn");

btn.addEventListener("click",function(){
    let cardnumber=document.getElementById("cardnumber").value;
let cardHolder=document.getElementById("holder").value;
let month=document.getElementById("month").value;
let cvv=document.getElementById("CVV").value;
let year=document.getElementById("year").value;
    cardValidate(cardnumber,cardHolder,month,cvv,year)
    //console.log("new")
    // window.location.reload();
})


function cardValidate(cn,ch,m,cv,y){
    //console.log(cn,ch,m,cv,y)
    if(cn.length==16 && cv.length==3&& ch!==""&&m!==""&&y!==""){
        // alert("Your order is placed")
        window.location.href="orderplaced.html"
    }else{
        alert("check card details")
    }

    let details={
        cardnumber:cn,
        cardHolder:ch,
        month:m,
        cvv:cv,
        year:y,
    }
    //console.log("details",details)
    localStorage.setItem("cardDetails",JSON.stringify(details));
   
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