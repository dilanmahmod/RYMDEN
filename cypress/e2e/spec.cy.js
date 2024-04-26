describe('Login-flow as private customer', () => {
 

    beforeEach(() => {
     // Mock API callto return mock data
     cy.intercept('/mockData/kunder_privat.json').as('getCustomerData');
    
     cy.visit('http://127.0.0.1:5501/privatkundLoggin.html') // access login
    
      cy.window().then(win => {
      cy.stub(win, 'alert').as('alertStub');
  
    });

  });
    
    it('Should Login with valid private customer', () => {
   
    // Logga in med email and password when user click loggain button
    cy.get('#inputEmail').type('miwa.g@example.com');
    cy.get('#inputPassword').type('1234');
    cy.get('#loginForm').submit();

   //waiting API call and alert
    cy.wait('@getCustomerData');

    cy.get('@alertStub').then(alertStub => {
      expect(alertStub).to.have.been.calledWith('Välkommen Miwa som privatkund.');
    });

    // Redirect to privatkund sida
    cy.url().should('include', '/privatkund.html');

  });

    it('Showld show error with invalid private customer', () => {

    cy.get('#inputEmail').type('mmm.x@exaple.com');
    cy.get('#inputPassword').type('xxxx');
    cy.get('#loginForm').submit();

    cy.wait('@getCustomerData');

    /* cy.get('@alertStub').then(alertStub => {
      console.log(alertStub.arg); // Log the number of times alertStub was called
      expect(alertStub).to.have.been.calledWith('Ogiltig e-postadress eller ogiltigt lösenord. Vänligen försök igen.');
    }); */

    cy.get('@alertStub').then(alertStub => {
      console.log(alertStub.args); // Log the arguments passed to the alertStub function
      expect(alertStub).to.have.been.calledWith('Ogiltig e-postadress eller ogiltigt lösenord. Vänligen försök igen.');
    });

 });  
});