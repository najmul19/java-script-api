const addProduct = ()=>{
    const productField = document.getElementById('product-name')
    const quantityField = document.getElementById('product-quantity')
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = ""
    quantityField.value = ""

    console.log(product)
    console.log(quantity)
    displayProduct(product,quantity)
    svaeProductToLocalStorage(product,quantity)
}

const displayProduct = (product,quantity)=>{
    const ul = document.getElementById('product-container')
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`
    ul.appendChild(li);
}
const getStoredShopingCart = ()=>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}
const svaeProductToLocalStorage = (product,quantity)=>{
    const cart = getStoredShopingCart();
    cart[product]=quantity;
    console.log(cart)
    const cartStrinigified=JSON.stringify(cart)
    console.log(cartStrinigified)
    localStorage.setItem('cart',cartStrinigified)
}

const displayProductsFromLocalStrorage = ()=>{
    const saveCart = getStoredShopingCart();
    console.log(saveCart);
    for(const p in saveCart){
        const quantity = saveCart[p]
        console.log(quantity)
        console.log(p);
        displayProduct(p,quantity);
    }
}

displayProductsFromLocalStrorage();