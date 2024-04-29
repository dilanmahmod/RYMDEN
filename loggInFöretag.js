fetch('mockData/kunder_foretag.json')
  .then(response => response.json())
  .then(data => {

const isvalidUser= (email, password)=>{
    console.log(inputEmail)
    console.log(inputPassword)

    const findedUser= data.find( u => u.email === email && u.password === password);
    console.log(findedUser)

    if(findedUser ){

            alert("Välkommen "+ findedUser.company_name+ " som företagkund.");
            console.log("Login successful.Redirecting to privatkund.html")
            localStorage.setItem('logged-inUserData', JSON.stringify(findedUser));
            window.location.href = "foretagkund.html";

    } else {
        alert("Ogiltig e-postadress eller ogiltigt lösenord. Vänligen försök igen.")
        console.log("Invaid email eller password")
        
    }
    
} 

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const inputEmail = document.getElementById('inputEmail').value;
    const inputPassword = document.getElementById('inputPassword').value;
    isvalidUser(inputEmail, inputPassword);
  });


})
  .catch(error => console.error('Error fetching customer data:', error));




