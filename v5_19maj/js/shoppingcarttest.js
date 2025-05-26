/**
 * 1. Hämta alla knapp-element i JS och spara i en variabel
 * 2. Loopa igenom alla knapp-element och sätta en eventlistener på varje (klickbar)
 * 3. Deklarera en variabel som är en array som är vår varukorg
 * 4. När jag klickar på "Add to cart" så lägg till vald produkt i varukorgen
 * 5. När en produkt lagts till så uppdateras siffran för antal i varukorgen
 * 6. Hämta elementet med texten "cart" och sätt en eventlistener på
 * 7. När man klickar på "Cart", visa varukorgen
 * 8. Loopa ut alla produkter och visa dessa
*/

let products = document.getElementsByTagName("button");
let shoppingCart = [];

function updateCart() {
    document.querySelector("#productsInCart").innerHTML = shoppingCart.length;
}

function listProductsInCart() {
    let cartProducts = "";
    for(let i = 0; i < shoppingCart.length; i++) {
     cartProducts = 
        cartProducts +
        '<li><span class="product-title">Titel: </span>' +
        shoppingCart[i] + '</li>';
    }
    console.log(cartProducts);
    document.querySelector("#products").innerHTML = cartProducts;
}

document.querySelector("#open-cart").addEventListener("click", () => {
    document.querySelector("#cart").classList.toggle("hide");
    listProductsInCart();
});

for (let i = 0; i < products.length; i++) {
    console.log("Button elem:", products[i]);
    products[i].addEventListener("click", (event) => {
        console.log(event.target);
        // event here is the HTML element that was clicked on
        let product = event.target.parentNode.getAttribute("data-product");
        console.log(product);
        shoppingCart.push(product);
        console.log(shoppingCart);
        updateCart(); // dessa två uppdaterar varukorgen och visar titlarna även när varukorgen är öppen
        listProductsInCart(); 
    });
}
