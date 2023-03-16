


const send_data = async() => {
    let new_product_data = document.getElementById('new_products');

    let data = {
        "name":new_product_data.product_price.value,
        "price":new_product_data.product_price.value,
        "gender":new_product_data.product_gender.value,
        "description":new_product_data.product_description.value,
        "category":new_product_data.product_category.value,
        "image":new_product_data.product_image.value,
        "discount":new_product_data.product_name.value,
    }
    //console.log(data);

    let response = await fetch(`https://zara-project.onrender.com/data`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    });
    let response_data = await response.json();
    console.log('data got from server', response_data);
}

let send_btn = document.getElementById('send_data');
send_btn.addEventListener('click',send_data);