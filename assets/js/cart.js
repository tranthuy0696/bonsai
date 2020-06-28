function removeCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(({id}) => Number(productId) !== id)
    localStorage.setItem('cart', JSON.stringify(cart))
}

function displayCartQuantity() {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const quantity = cart.length
    $('.cart .cart-count').html(quantity)
}