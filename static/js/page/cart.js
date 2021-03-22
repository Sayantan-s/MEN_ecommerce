const OrderFromCart = document.querySelector('#order-from-cart');


OrderFromCart.addEventListener('click',() => {
    fetch('/orders',{
        method : 'POST',
        headers : {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify({ name : "Hello" })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
})

/*for(let i = 0; i < deleteItemFromCart.length; i++){

    const productId = deleteItemFromCart[i].getAttribute('productId');

    deleteItemFromCart[i].addEventListener('click',async() => {
        try{
            const response = await fetch('/cart-delete',{
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({ name : "Hello" })
            })
            console.log(response);
            const data = await response.json();
            console.log(data);
          }
          catch(error){
            console.log(error);
          }
    })
}*/


