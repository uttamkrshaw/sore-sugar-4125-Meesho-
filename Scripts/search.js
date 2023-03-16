import {navbar} from "../Components/navbar.js"

let header=document.querySelector("#header")
header.innerHTML=navbar()
// console.log(navbar());
document.getElementById("logo").onclick=()=>{
    window.location.href="index.html" 
}


async function searchTerm(sortLH){

    let search=document.getElementById("mysearch").value;
    try{
        
        //https://cryptic-beach-27653.herokuapp.com/posts
       // let response= await fetch(`https://boiling-brook-19493.herokuapp.com/posts?q=${search}`);
        let response= await fetch(`https://zara-project.onrender.com/data?q=${search}`);
        let data=await response.json();
        // console.log("data:",data)

        // appendData(data);
        filter(data);
    }
    catch(error){
        console.log("error:",error)
    }
}

//filter functionality-->

// let filter_btn=document.getElementById("price_filter");

// filter_btn.addEventListener("change",function(){
//     priceFilter();
// });



function filter(data){
    let search=document.getElementById("mysearch").value;

    let dataArr=[];
    data.forEach((el)=>{
        if(el.category==search){
            dataArr.push(el);
        }
    })
    //console.log(dataArr)
    let sortFunction=document.getElementById("price_filter");
    sortFunction.addEventListener("change", sortLH);

    function sortLH(){
        //console.log("data",dataArr)
        let val=document.getElementById("price_filter").value;
        console.log(val)
        if(val=="high"){
                dataArr.sort((a,b)=>b.price-a.price); 
        }else{
            dataArr.sort((a,b)=>a.price-b.price);
        }
        appendData(dataArr);
        }


    appendData(dataArr);
}

function appendData(data){
    // console.log(data)
    let products_div=document.getElementById("products");
    let loader=document.getElementById("loader");
    loader.style.display="none"
    let loader1=document.getElementById("loader1");
    loader1.style.display="none"
    products_div.innerHTML=null;
    
    data.forEach((el,i)=>{
        //console.log(el)
        let div=document.createElement("div");
        div.className="card"

        let img=document.createElement("img");
        img.src=el.image;
        img.className="image_s";
        img.addEventListener("click",()=>{
            addToCart(el)
           
            window.location.href="cartproductinfo.html"
        })

        let p_name=document.createElement("p");
        p_name.innerText= el.discount;
        p_name.className="title";

        let p_price=document.createElement("p");
        p_price.innerText="₹ "+el.price;
        p_price.className="prc"

        let myp_div=document.createElement("div");
        myp_div.className="flex";
        myp_div.append(p_name,p_price)
        div.append(img,myp_div);

        products_div.append(div);

 
    });


}

let searchFun=document.getElementById("mysearch");

searchFun.addEventListener("input",function(){
    debouncing(searchTerm(),1000);
})

let id;

function debouncing(func,delay){

    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function(){

        func();
    },delay)

}

function addToCart(el){

    let cartData=[];
    cartData.push(el);

    localStorage.setItem("cart",JSON.stringify(cartData));

}


let login_data = JSON.parse(localStorage.getItem('login_data'));

let login_logo = document.getElementById('loginID');
login_logo.innerText=login_data.username;
   

