function processform(event) {
    event.preventDefault();

    var fName = document.getElementById("firstName").value;
    var sName = document.getElementById("secondName").value;
    var flName = document.getElementById("firstLastname").value;
    var slName = docuemnt.getElementById("secondLastname").value;
    var nId = document.getElementById("numberId").value;
    var dBorn = document.getElementById("dateBorn").value;
    var lLine = document.getElementById("landLine").value;
    var cPhone = document.getElementById("cellPhone").value;
    var oAddres = docuemnt.getElementById("officeAddres").value;
    var Email = document.getElementById("email").value;

    var user = {
        firstName: fName,
        secondName: sName,
        firstLastname: flName,
        secondLastname: slName,
        numberId: nId,
        dateBorn: dBorn,
        landLine: lLine,
        cellPhone: cPhone,
        officeAddres: oAddres,
        email: Email,
    };

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
        var createObjectData = db.createObjectStore("users", { keyPath: "firstName" });
    };


}
var form = document.getElementById("contactForm");
form.addEventListener("submit", processform);
