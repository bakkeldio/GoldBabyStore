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


function renderTable() {
    var order = firebase.database().ref("order/");
    order.on("child_added", function (data) {

    var orderValue = data.val();
    document.getElementById("table1").innerHTML+=`
        <tr>
            <td>${orderValue.id}</td>
            <td>${orderValue.order}</td>
            <td>${orderValue.total}</td>
</tr>
        `;
    });
};