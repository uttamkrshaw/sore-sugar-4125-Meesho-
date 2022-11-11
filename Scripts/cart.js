let Cdata=JSON.parse(localStorage.getItem("bag"))||[];

let totalCart=Cdata.length;

let bag=document.getElementById("num");
bag.innerText=+totalCart;

function appendData(data){
    // console.log(data)
    let products_div=document.getElementById("myproducts");

    // products_div.innerHTML=null;

    data.forEach((el,i)=>{
        console.log(el)
        let div=document.createElement("div");
        div.className="card"

        let img=document.createElement("img");
        img.src=el.image;
        img.className="image_s";
        img.addEventListener("click",()=>{
            addToCart(el,i);
        })

        let p_name=document.createElement("p");
        p_name.innerText= el.discount;
        p_name.className="title";

        let p_price=document.createElement("p");
        p_price.innerText=el.price;
        p_price.className="prc"

        let myp_div=document.createElement("div");
        myp_div.className="flex";
        myp_div.append(p_price)
        div.append(p_name,img,myp_div);

        products_div.append(div);

    })
}

appendData(Cdata);


let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    movetoPayment();
})

function movetoPayment(){

    window.location.href="payment.html"
}