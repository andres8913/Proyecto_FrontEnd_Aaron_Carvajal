console.log("hola js")

function saveCustomer(){

    let numeroIdentificacionCustomer = document.getElementById("numeroIdentificacion");
    let nombresCustomer = document.getElementById("nombres");
    let apellidosCustomer = document.getElementById("apellidos");
    let tipoIdentificacionCustomer = document.getElementById("tipoIdentificacion");    
    let telefonoCustomer = document.getElementById("telefono");
    let emailCustomer = document.getElementById("email");    
    let profesionCustomer = document.getElementById("profesion");
    let rolCustomer = document.getElementById("rol");

    if (
        numeroIdentificacionCustomer.value === '' ||
        nombresCustomer.value === '' ||
        apellidosCustomer.value === '' ||
        tipoIdentificacionCustomer.value === '' ||
        telefonoCustomer.value === '' ||
        emailCustomer.value === '' ||
        profesionCustomer.value === '' ||
        rolCustomer.value === ''
    ) {
        alert("Por Favor Diligenciar Todos Los Campos");
        return false;
    }


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
    let params = {
        method: "POST",
        headers:{

            "Content-Type": "application/json" 
        },

        body: JSON.stringify(customer),

    }

    fetch(url,params).then((response) =>{

        console.log(response);
        console.log(response.json());

        if(response.status == 200){

            alert("Informacion Registrada Correctamente");
            document.getElementById("contactForm").reset();

        }else{

            alert("El Usuario Ya Esta Registrado, Pro Favor Verifique La Informacion");

        }
    
    });

return true;
}

function getCustomers(){

    let url = "http://localhost:8000/api/customers";
    let params = {
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        },
    }

    fetch(url,params).then((response) =>{
        console.log(response);
        console.log(response.json());
    });

   return true; 

    };

  


