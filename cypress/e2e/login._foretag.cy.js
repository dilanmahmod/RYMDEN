describe('Login-flow as företag customer', () => {
 

    beforeEach(() => {
     // Mock API callto return mock data
     cy.intercept('/mockData/kunder_foretag.json').as('getCustomerData');
    
     cy.visit('http://127.0.0.1:5501/företagskundLoggin.html') // access login
    
      cy.window().then(win => {
      cy.stub(win, 'alert').as('alertStub');
  
    });

  });
    
    it('Should Login with valid företag customer', () => {
   
    // Logga in med email and password when user click loggain button
    cy.get('#inputEmail').type('hassvanie.ab@example.com');
    cy.get('#inputPassword').type('1111');
    cy.get('#loginForm').submit();

   //waiting API call and alert
    cy.wait('@getCustomerData');

    cy.get('@alertStub').then(alertStub => {
      expect(alertStub).to.have.been.calledWith('Välkommen Hassvanie AB som företagkund.');
    });

    // Redirect to företagkund sida
    cy.url().should('include', '/foretagkund.html');

  });

    it('Showld show error with invalid företag customer', () => {

    cy.get('#inputEmail').type('hassvanie.ab@example.com');
    cy.get('#inputPassword').type('9999');
    cy.get('#loginForm').submit();

    //waiting API call and alert
    cy.wait('@getCustomerData');

    cy.get('@alertStub').then(alertStub => {
      console.log(alertStub.args); // Log the arguments passed to the alertStub function
      expect(alertStub).to.have.been.calledWith('Ogiltig e-postadress eller ogiltigt lösenord. Vänligen försök igen.');
    });

 });  
});