describe('Login-flow as employee', () => {
 

    beforeEach(() => {
     // Mock API callto return mock data
     cy.intercept('/mockData/anstallda.json').as('getEmployeeData');
    
     cy.visit('http://127.0.0.1:5501/anställdLoggin.html') // access login
    
      cy.window().then(win => {
      cy.stub(win, 'alert').as('alertStub');
  
    });

  });
    
    it('Should login as admin', () => {
   
    // Logga in med email and password when user click loggain button
    cy.get('#inputEmail').type('mikaela.j@example.com');
    cy.get('#inputPassword').type('admin');
    cy.get('#loginForm').submit();

   //waiting API call and alert
    cy.wait('@getEmployeeData');

    cy.get('@alertStub').then(alertStub => {
      expect(alertStub).to.have.been.calledWith('Välkommen Mikaela som admin.');
    });

    // Redirect to privatkund sida
    cy.url().should('include', '/admin.html');

  });

  it('Should login as städare', () => {
   
    // Logga in med email and password when user click loggain button
    cy.get('#inputEmail').type('nelly.a@example.com');
    cy.get('#inputPassword').type('cleaner');
    cy.get('#loginForm').submit();

   //waiting API call and alert
    cy.wait('@getEmployeeData');

    cy.get('@alertStub').then(alertStub => {
      expect(alertStub).to.have.been.calledWith('Välkommen Nelly som städare.');
    });

    // Redirect to privatkund sida
    cy.url().should('include', '/stadare.html');

  });

    it('Showld show error with invalid private customer', () => {

    cy.get('#inputEmail').type('mmm.x@exaple.com');
    cy.get('#inputPassword').type('xxxx');
    cy.get('#loginForm').submit();

    cy.wait('@getEmployeeData');

    cy.get('@alertStub').then(alertStub => {
      console.log(alertStub.args); // Log the arguments passed to the alertStub function
      expect(alertStub).to.have.been.calledWith('Ogiltig e-postadress eller ogiltigt lösenord. Vänligen försök igen.');
    });

 });  
});