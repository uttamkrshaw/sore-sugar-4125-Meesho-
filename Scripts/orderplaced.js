let btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    press(); 
})

const press = async()=>{
    let Cdata=JSON.parse(localStorage.getItem("bag"))

    let response = await fetch(`https://zara-project.onrender.com/data`,{
        method:"POST",
        body:JSON.stringify(Cdata),
        headers:{
            'Content-Type':'application/json'
        }
    });
    let response_data = await response.json();
    console.log('data got from server', response_data);

    console.log("bag data display ",Cdata);
    localStorage.removeItem("bag");
    //localStorage.clear();

    window.location.href="search.html"
}