const OrderFromCart = document.querySelector('#order-from-cart');

OrderFromCart.addEventListener('click',() => {
    fetch('/orders',{
        method : 'POST',
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRFToken': OrderFromCart.getAttribute('csrfToken')
        },
        body : JSON.stringify({ name : "Hello" })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
})


 
