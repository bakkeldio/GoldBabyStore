//FIREBASE
var config = {
    apiKey: "AIzaSyCyghLVvVw6PGEejLI0exf38m2grd7L000",
    authDomain: "organicstore-d48d2.firebaseapp.com",
    databaseURL: "https://organicstore-d48d2.firebaseio.com",
    projectId: "organicstore-d48d2",
    storageBucket: "organicstore-d48d2.appspot.com",
    messagingSenderId: "669473441563",
    appId: "1:669473441563:web:e01d32806c55bbd018b5be",
    measurementId: "G-YEWH8W6PQ4"
};
firebase.initializeApp(config);
//GLOBAL
var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n');
//DIV
var jacketDIV = document.getElementById("jacketDIV");
var shoesDIV = document.getElementById("shoesDIV");
var jeansDIV = document.getElementById("jeansDIV");
//INFORMATION
var JACKET = [
    {name:'Jacket #1', price:1},
    {name:'Jacket #2', price:1},
    {name:'Jacket #3', price:1},
    {name:'Jacket #4', price:1},
    {name:'Jacket #5', price:1},
    {name:'Jacket #6', price:1},
    ];
var SHOES = [
    {name:"SHOES #1", price:10},
    {name:'SHOES #2', price:11},
    {name:'SHOES #3', price:12}];
var JEANS = [
    {name:'JEANS #1', price:11},
    {name:'JEANS #2', price:12},
    {name:'JEANS #3', price:15}];
//HTML

function jacketProduct(con) {
    let URL = `image/jackets/jacket${con}.jpg`;
    let btn = `btnJacket${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
            <img class="card-img-top" style="height: 16rem;" src="${URL}"
            alt="Card image cap"/>
            <div class="card-body">
            <i style="color: orange" class="fa-star"></i>  
            <i style="color: orange;" class="fa-star"></i>  
            <i style="color: orange;" class="fa-star"></i>  
            <i style="color: orange;" class="fa-star"></i>  
            <i style="color: orange;" class="fa-star"></i>  
            <i style="color: orange;" class="fa-star"></i>  
            <p class="card-text">${JACKET[con - 1].name}</p>
            <p class="card-text">Price: ${JACKET[con - 1].price}.00</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" onclick="cart2('${JACKET[con - 1].name}','${JACKET[con - 1].price}','${URL}','${con}','${btn}')"
                 class="btn btn-sm btn-outline-secondary"><a href="../cart.html" style="color: inherit">Buy</a></button>
                 <button id="${btn}" type="button" onclick="cart('${JACKET[con - 1].name}','${JACKET[con - 1].price}','${URL}','${con}','${btn}')"
                 class="btn btn-sm btn-outline-secondary">Add to cart</button>
                 
          </div>
          <small class="text-muted">Free shipping</small>
                </div>
                
                </div>
            </div>
        </div>
        `

}

function shoesProduct(con) {
    let URL = `image/shoes/shoes${con}.jpg`;
    let btn = `btnShoes${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
            <img class="card-img-top" style="height: 16rem;" src="${URL}"
            alt="Card image cap"/>
            <div class="card-body">
            <i style="color: orange" class="fa-star"></i>  
            <i style="color: orange;" class="fa-star"></i>  
            <i style="color: orange;" class="fa-star"></i>  
            <i style="color: orange;" class="fa-star"></i>  
            <i style="color: orange;" class="fa-star"></i>  
       
            <p class="card-text">${SHOES[con - 1].name}</p>
            <p class="card-text">Price: ${SHOES[con - 1].price}.00</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" onclick="cart2('${SHOES[con - 1].name}','${SHOES[con - 1].price}','${URL}','${con}','${btn}')"
                 class="btn btn-sm btn-outline-secondary"><a href="cart.html" style="color: inherit;">Buy</a></button>
                 <button id="${btn}" type="button" onclick="cart('${SHOES[con - 1].name}','${SHOES[con - 1].price}','${URL}','${con}','${btn}')"
                 class="btn btn-sm btn-outline-secondary">Add to cart</button>
                 
          </div>
          <small class="text-muted">Free shipping</small>
                </div>
                
                </div>
            </div>
        </div>
        `

}

function jeansProduct(con) {
    let URL = `image/jeans/jeans${con}.jpg`;
    let btn = `btnJeans${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
            <img class="card-img-top" style="height: 16rem;" src="${URL}"
            alt="Card image cap"/>
            <div class="card-body">
            <i style="color: orange" class="fa-star"></i>  
            <i style="color: orange;" class="fa-star"></i>  
            <i style="color: orange;" class="fa-star"></i>  
            <i style="color: orange;" class="fa-star"></i>  
            <i style="color: orange;" class="fa-star"></i>  
            <i style="color: orange;" class="fa-star"></i>  
            <p class="card-text">${JEANS[con - 1].name}</p>
            <p class="card-text">Price: ${JEANS[con - 1].price}.00</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" onclick="cart2('${JEANS[con - 1].name}','${JEANS[con - 1].price}','${URL}','${con}','${btn}')"
                 class="btn btn-sm btn-outline-secondary"><a href="cart.html" style="color: inherit">Buy</a></button>
                 <button id="${btn}" type="button" onclick="cart('${JEANS[con - 1].name}','${JEANS[con - 1].price}','${URL}','${con}','${btn}')"
                 class="btn btn-sm btn-outline-secondary">Add to cart</button>
                 
          </div>
          <small class="text-muted">Free shipping</small>
                </div>
                
                </div>
            </div>
        </div>
        `

}
//ANIMATION
function animation() {
    const toast = swal.mixin({
        toast:true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000
    });

    swal.fire({
        type: 'success',
        title: 'Added to shopping cart'
    });
}
//CART FUNCTION
function cart(name, price, url, con, btncart) {
    var item = {
        name: name,
        price: price,
        url: url
    };
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage==null){
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display = "none";
    animation();
}

function cart2(name, price, url, con, btncart) {
    var item ={
        name: name,
        price: price,
        url: url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null){
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display = "none";



}

function render() {
    for (let index = 1; index <= 6; index++){
        jacketDIV.innerHTML+=`${jacketProduct(index)}`;
    }

    for (let index = 1; index <= 3; index++){
        shoesDIV.innerHTML+=`${shoesProduct(index)}`;
        jeansDIV.innerHTML+=`${jeansProduct(index)}`;
    }

    if (localStorage.getItem("cart")==null){

    }
    else {
        products = JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML = `[${products.length}]`;
    }

}




