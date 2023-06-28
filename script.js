
function processform(event) {
    event.preventDefault();

    var names = document.getElementById("Names").value;
    var lastname = document.getElementById("lastName").value;
    var lLine = document.getElementById("landLine").value;
    var cPhone = document.getElementById("cellPhone").value;
    var oAddres = document.getElementById("officeAddress").value;
    var Email = document.getElementById("email").value;

    var user = {
        Names: names,
        lastName: lastname,
        landLine: lLine,
        cellPhone: cPhone,
        officeAddress: oAddres,
        email: Email,
    }


    console.log(user);
    var dataBase = window.indexedDB.open("bdFront", 5);

    dataBase.onsuccess = (event) => {
        console.log("DB creada");
        let db = dataBase.result;
        console.log(db);
        var instanceTransaction = db.transaction("users", "readwrite").objectStore("users");
        var saveData = instanceTransaction.add(user);
        alert("Su Información Se Ha Enviado Correctamente, Gracias Por Elegirme");
        form.reset();
    };

    dataBase.onupgradeneeded = (event) => {
        let db = event.target.result;
        var createObjectData = db.createObjectStore("users", { keyPath: "Names" });
    };


}
var form = document.getElementById("contactForm");
form.addEventListener("submit", processform);




