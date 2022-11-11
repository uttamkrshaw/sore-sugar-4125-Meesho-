let Cdata=JSON.parse(localStorage.getItem("cart"))||[];

let Cartdata=JSON.parse(localStorage.getItem("bag"))||[];
console.log("Cartdata",Cartdata)

let totalCart=Cartdata.length;

let bag=document.getElementById("num");
bag.innerText=+totalCart;

function appendData(data){
    // console.log(data)
    let products_div=document.getElementById("myproduct");
    let priceDetails_div=document.getElementById("priceDetails");


    // products_div.innerHTML=null;

    data.forEach((el,i)=>{
        console.log(el)
        let div=document.createElement("div");
        div.className="card"

        let img=document.createElement("img");
        img.src=el.image;
        img.className="image_s";
        
        let p_name=document.createElement("p");
        p_name.innerText= el.discount;
        p_name.className="title";

        let p_price=document.createElement("p");
        p_price.innerText="₹"+el.price;
        p_price.className="prc"
        p_price.style.marginTop="20px";
        p_price.style.fontSize="15px"

        let myp_div=document.createElement("div");
        myp_div.className="flex";

        let p_det=document.createElement("p");
        p_det.innerText="High-waist Bermuda shorts with front dart details. Front pockets and rear false flap pocket. Front zip fly, interior button and metal hook fastening.";
        p_det.className="text"
        p_det.style.marginTop="20px";
        p_det.style.fontSize="12px"

        let p_col=document.createElement("p");
        p_col.innerText="BLACK"
        p_col.className="text"
        p_col.style.marginTop="20px";

        let p_size=document.createElement("hr");
        p_size.style.marginTop="20px";

        let choose_size=document.createElement("select");
        let o1=document.createElement("option");
        o1.innerText="XL"
        choose_size.innerHTML=o1;

        let p_size2=document.createElement("hr");
        p_size2.style.marginTop="20px";

        let btn=document.createElement("button");
        btn.innerText="ADD TO BAG"
        btn.style.backgroundColor="black";
        btn.style.color="white";
        btn.style.width="100%";
        btn.style.padding="10px"
        btn.style.marginTop="70px"
        btn.addEventListener("click",function(){
        
        moveToCart(el)


        })


        myp_div.append(p_price)
        div.append(img);

        priceDetails_div.append(p_name,p_det, p_col, p_price,p_size,choose_size,p_size2,btn)
        products_div.append(div);

    })
}

appendData(Cdata);

const moveToCart=(el)=>{

    
    
    let  Cartdata=JSON.parse(localStorage.getItem("bag"))||[];
   
    Cartdata.push(el)
    localStorage.setItem("bag",JSON.stringify(Cartdata));

 
    window.location.href="cart.html";
}