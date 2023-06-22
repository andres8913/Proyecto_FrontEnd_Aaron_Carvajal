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

}
var form = document.getElementById("contactForm");
form.addEventListener("submit", processform);
