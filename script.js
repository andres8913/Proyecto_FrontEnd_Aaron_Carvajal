const processform = (event) => {
    
    event.preventDefault();

    var fName = document.getElementById("firstName").value;
    var sName = document.getElementById("secondName").value;

    var user = {
        firstName: fName,
        secondName: sName,
    }

    console.log(user);

    var dataBase = window.indexedDB.open("bdFront",1);
    
    dataBase.onsuccess = (event)=>{
        console.log ("DB creada");
        let db = dataBase.result;
        console.log(db);
        var instanceTransaction = db.transaction("users","readwrite").objectStore("users");
        var saveData = instanceTransaction.add(user);
    }

    dataBase.onupgradeneeded = (event)=>{
        let db = event.target.result;
        var createObjectData = db.createObjectStore("users", {keyPath: "firstName"});
    }


}
var form = document.getElementById("contactForm");
form.addEventListener("submit", processform);
