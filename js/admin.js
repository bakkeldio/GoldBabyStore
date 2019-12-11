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
var d = new Date();
var t = d.getTime();
var counter = t;
//FORM
document.getElementById("form").addEventListener("submit", (e) => {
    var order = document.getElementById("order").value;
    var total = document.getElementById("total").value;
    e.preventDefault();
    createOrder(order, total);
    form.reset();
});
//create new order
function createOrder(order, total) {
    console.log(counter);
    counter+=1;
    console.log(counter);
    var newOrder = {
        id: counter,
        order:order,
        total:total
    };
    let db = firebase.database().ref("order/"+counter);
    db.set(newOrder);
    document.getElementById("cardSection").innerHTML = '';
    //readOrder();
}

function readOrder(){
    var order = firebase.database().ref("order/");
    order.on("child_added",function (data) {
        var orderValue = data.val();
        document.getElementById("cardSection").innerHTML+=`
            <div class="card mb-3">
                <div class="card-body">
                <h5 class="card-title">Order: ${orderValue.order}</h5>
                <p class="card-text">Total: ${orderValue.total}</p>
                <button type="button" class="btn btn-warning" style="color: white" onclick="updateOrder(${orderValue.id},'${orderValue.order}','${orderValue.total}')">
                <i class="fas fa-edit"></i> Edit Order</button>
                
                 <button type="button" class="btn btn-danger" onclick="deleteOrder(${orderValue.id},)">
                <i class="fas fa-trash-alt"></i> Delete Order</button>
                </div>
              </div>
        
        `
    });
}

function reset() {
    document.getElementById("firstSection").innerHTML = `
         <form class="border p-4 mb-4" id="form">
                <div class="form-group">
                    <label>Order</label>
                    <input type="text" class="form-control" id="order" placeholder="order">
                </div>

                <div class="form-group">
                    <label>total</label>
                    <input type="text" class="form-control" id="total" placeholder="total">
                </div>

                <button type="submit" id="button1" class="btn btn-primary"><i class="fas fa-plus"></i>Add Order</button>
                <button style="display:none" id="button2" class="btn btn-success" >Update Order</button>
                <button style="display:none" id="button3" class="btn btn-danger" >Cancel</button>
            </form>
`;
    document.getElementById("form").addEventListener("submit", (e) => {
        var order = document.getElementById("order").value;
        var total = document.getElementById("total").value;
        e.preventDefault();
        createOrder(order, total);
        form.reset();
    });
}
function updateOrder(id, order, total) {

    document.getElementById("firstSection").innerHTML=`
    <form class="border p-4 mb-4" id="form2">
                <div class="form-group">
                    <label>Order</label>
                    <input type="text" class="form-control" id="order" placeholder="order">
                </div>

                <div class="form-group">
                    <label>total</label>
                    <input type="text" class="form-control" id="total" placeholder="total">
                </div>

                <button type="submit" style="display: none" id="button1" class="btn btn-primary"><i class="fas fa-plus"></i>Add Order</button>
                <button id="button2" class="btn btn-success" >Update Order</button>
                <button id="button3" class="btn btn-danger" >Cancel</button>
            </form>
    
    
    `;
    document.getElementById("form2").addEventListener("submit", (e) => {
        e.preventDefault();
    });

    document.getElementById("button3").addEventListener("click", (e)=>{
            reset();

        });

    document.getElementById("button2").addEventListener("click", (e)=>{
        updateOrder2(id,document.getElementById("order").value,
            document.getElementById("total").value);
    });

    document.getElementById("order").value = order;
    document.getElementById("total").value = total;
}
function updateOrder2(id, order, total) {
    var orderUpdated={
        id: id,
        order: order,
        total: total
    };
    let db = firebase.database().ref("order/"+id);
    db.set(orderUpdated);
    document.getElementById("cardSection").innerHTML = "";
    readOrder();
    reset();

}
function deleteOrder(id) {
    console.log(id);
    var order = firebase.database().ref("order/"+id);
    order.remove();
    reset();
    document.getElementById("cardSection").innerHTML = "";
    readOrder();
}
function renderTable() {

}