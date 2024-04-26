fetch('mockData/anstallda.json')
  .then(response => response.json())
  .then(data => {

const isvalidUser= (email, password)=>{
    console.log(inputEmail)
    console.log(inputPassword)

    const findedUser= data.find( u => u.email === email && u.password === password);
    console.log(findedUser)


    if(findedUser ){
        
        if(findedUser.role==="admin"){
            alert("Välkommen "+ findedUser.firstname+ " som admin.");
            console.log("Login successful.Redirecting to admin.html")
            localStorage.setItem('logged-inUserData', JSON.stringify(findedUser));
            window.location.href = "admin.html";
        } else{
            alert("Välkommen "+ findedUser.firstname+ " som städare.");
            console.log("Login successful.Redirecting to städare.html")
            localStorage.setItem('logged-inUserData', JSON.stringify(findedUser));
            window.location.href = "stadare.html"; 
        }
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




