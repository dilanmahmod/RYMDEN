const inputEmail = document.getElementById('inputEmail');
const inputPassword= document.getElementById('inputPassword');


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

    const findedCustomer= data.customers.find( c => c.email === email);

    if(findedCustomer){
        const MatchedPassword = findedCustomer.password===password;

        if(MatchedPassword){

            const checkPrivate = findedCustomer.role==="private"
            return true;
        } else{
            return false;
        }
    }
    
} 

isvalidUser();




