//Variables to use and it's a mix of global and local variables
let shoppingCart = [];
let products = document.getElementsByTagName('button');
let cartProducts = '';

//This code gets whatever is inside data-product in the HTML
let product = event.target.parentNode.getAttribute('data-product');
cartProducts = cartProducts + '<li><span class="product-title">Titel: </span>' + shoppingCart[i] + '</li>';
shoppingCart.push(product);

//
document.querySelector('#productsInCart').innerHTML = shoppingCart.length;
document.querySelector('#cart').classList.toggle('hide');
document.querySelector('#products').innerHTML = cartProducts;

products[i].addEventListener('click', (event) => {
  console.log(event.target);
  // event here is the HTML element that was clicked on
});
document.querySelector('#open-cart').addEventListener('click', () => {});

//Function declarations, add code inside {}
function updateCart() {}
function listProductsInCart() {}


//For-loops of two arrays
for(let i = 0; i < shoppingCart.length; i++) {}
for(let i = 0; i < products.length; i++) {}


//Function calls and there should be two listProductsInCart()
updateCart();
listProductsInCart();
listProductsInCart();