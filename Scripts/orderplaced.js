let btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    press(); 
})

const press = async()=>{
    let Cdata=JSON.parse(localStorage.getItem("bag"))
    let Udata = JSON.parse(localStorage.getItem("login_data"))

    let data = {
        "User":Udata[0].username,
        "Ordered Item":Cdata
    }
    console.log("order",data);

    let response = await fetch(`https://zara-umk6.onrender.com/orders`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    });
    let response_data = await response.json();
    localStorage.removeItem("bag");
    //localStorage.clear();
    window.location.href="search.html"
}