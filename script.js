console.log('hola js');

function saveCustomer(){

    let numeroIdentificacionCustomer = document.getElementById("numeroIdentificacion");
    let nombresCustomer = document.getElementById("nombres");
    let apellidosCustomer = document.getElementById("apellidos");
    let tipoIdentificacionCustomer = document.getElementById("tipoIdentificacion");    
    let telefonoCustomer = document.getElementById("telefono");
    let emailCustomer = document.getElementById("email");    
    let profesionCustomer = document.getElementById("profesion");
    let rolCustomer = document.getElementById("rol");

    let customer = {
        numeroIdentificacion: numeroIdentificacionCustomer.value,
        nombres: nombresCustomer.value,
        apellidos: apellidosCustomer.value,
        tipoIdentificacion: tipoIdentificacionCustomer.value,        
        telefono: telefonoCustomer.value,
        email: emailCustomer.value,
        profesion: profesionCustomer.value,
        rol: rolCustomer.value
    }

    console.log(customer);

    let url = "http://localhost:8000/api/customer";

    fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customer),
    }).then(response =>{

        console.log(response);
    
    })

    alert("Cliente Creado")

    return true;
}

//Guardar Datos en IndexedDB
// function processform(event) {
//     event.preventDefault();

//     var names = document.getElementById("Names").value;
//     var lastname = document.getElementById("lastName").value;
//     var lLine = document.getElementById("landLine").value;
//     var cPhone = document.getElementById("cellPhone").value;
//     var oAddres = document.getElementById("officeAddress").value;
//     var Email = document.getElementById("email").value;

//     if (names === '' || lastname === '' || lLine === '' || cPhone === '' || oAddres === '' || Email === '') {
//         alert("Por favor, complete todos los campos del formulario.");
//         return;
//     }

//     var user = {
//         Names: names,
//         lastName: lastname,
//         landLine: lLine,
//         cellPhone: cPhone,
//         officeAddress: oAddres,
//         email: Email,
//     }

   
//     console.log(user);
//     var dataBase = window.indexedDB.open("bdFront", 5);

//     dataBase.onsuccess = (event) => {
//         console.log("DB creada");
//         let db = dataBase.result;
//         console.log(db);
//         var instanceTransaction = db.transaction("users", "readwrite").objectStore("users");
//         var saveData = instanceTransaction.add(user);
//         alert("Su Información Se Ha Enviado Correctamente, Gracias Por Elegirme");
//         form.reset();
//     };

//     dataBase.onupgradeneeded = (event) => {
//         let db = event.target.result;
//         var createObjectData = db.createObjectStore("users", { keyPath: "Names" });
//     };


//  }
// var form = document.getElementById("contactForm");
// form.addEventListener("submit", processform);







