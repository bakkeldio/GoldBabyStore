const config = {
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
var products = JSON.parse(localStorage.getItem('cart'));
var cartItems = [];
var cart_n = document.getElementById('cart_n');
var table = document.getElementById("table");
var total = 0;

//HTML
function tableHTML(i) {
    return `
            <tr>
            <th scope="row">${i+1}</th>
            <td><img style="width: 90px;" src="${products[i].url}"></td>
            <td>${products[i].name}</td>
            <td>1</td>
            <td>${products[i].price}</td>
            </tr>
    
    `;


}
//buy
function buy() {
    var d = new Date();
    var t = d.getTime();
    var counter = t;
    counter += 1;
    let db=firebase.database().ref("order/"+counter);

    let itemdb = {
        id: counter,
        order: counter - 895,
        total: total
    };
    db.set(itemdb);
    Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Purchase made successfully!',
        text: `Your purchase order is: ${itemdb.order}`,
        showConfirmButton: true,
        timer: 50000
    });

    clean();
}
//clean
function clean() {
    localStorage.clear();
    for (let index = 0; index < products.length; index++){
        table.innerHTML += tableHTML(index);
        total = total+parseInt(products[index].price);
    }
    total = 0;
    table.innerHTML = `
         <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            </tr>
    `;
    cart_n.innerHTML='';
    document.getElementById("btnBuy").style.display="none";
    document.getElementById("btnClean").style.display="none";


}

//render
function render() {
    for (let index=0;index < products.length; index++){
            table.innerHTML += tableHTML(index);
            total = total + parseInt(products[index].price);
    }
    table.innerHTML+=`
        <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Total: $${total}.00</th>
        </tr>
        
        <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">
            <button onclick="clean()" id="btnClean" class="btn text-white btn-warning">Clean SHopping Cart</button>
</th>
            <th scope="col"><button class="btn text-white btn-success" id="btnBuy" onclick="buy()">Buy</button> </th>
        </tr>
        
    `;
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;

}

