const deleteItemFromCart = document.querySelector('#delete-from-cart');

const productId = deleteItemFromCart.getAttribute('productId');

deleteItemFromCart.onclick = async () => {
    const response = await fetch(`/cart-delete`,{
        method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({ id : productId })
    });

    const data = await response.json();

    console.log(data);
}