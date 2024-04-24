document.getElementById('loginForm').addEventListener('submit', function(e) {

const inputEmail = document.getElementById('inputEmail').value;
const inputPassword= document.getElementById('inputPassword').value;

const data={
    "customers":[
     {
      "id": 1,
      "firstname": "Miwa",
      "lastname": "G",
      "email": "miwa.g@example.com",
      "telephone": "1234567890",
      "address": "Mainvägen 7",
      "city": "Stockholm",
      "postcode": "10001",
      "password": "1234",
      "role": "private"
    },
    {
      "id": 2,
      "firstname": "Oskar",
      "lastname": "G",
      "email": "oskar.g@example.com",
      "telephone": "0987654321",
      "address": "Elmvägen 1",
      "city": "Stockholm",
      "postcode": "90001",
      "password": "2345",
      "role": "company"
    },

  ]
}


const isvalidUser= (email, password)=>{
    console.log(inputEmail)
    console.log(inputPassword)

    const findedCustomer= data.customers.find( c => c.email === email);

    if(findedCustomer&& findedCustomer.password===password ){

        if(findedCustomer.role==="private"){
            alert("Välkommen "+ findedCustomer.firstname+ " som privatkund.");
            console.log("Login successful.Redirecting to privatkund.html")
            window.location.href = "privatkund.html";
        } else{
            alert("Välkommen "+ findedCustomer.firstname+ " som företagkund.");
            console.log("Login successful.Redirecting to företagskund.html")
            window.location.href = "företagskund.html"; 
        }
    } else {
        alert("Ogiltig e-postadress eller ogiltigt lösenord. Vänligen försök igen")
        console.log("Invaid email eller password")
        
    }
    
} 

    e.preventDefault();
    isvalidUser(inputEmail, inputPassword);
});




