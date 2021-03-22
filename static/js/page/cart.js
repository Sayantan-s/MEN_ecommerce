const deleteItemFromCart = document.querySelectorAll('#delete-from-cart');

for(let i = 0; i < deleteItemFromCart.length; i++){

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
}

