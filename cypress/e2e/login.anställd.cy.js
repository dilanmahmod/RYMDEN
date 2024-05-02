describe('Logga in som anställd', () => {
    it('Användare ska kunna se Logga in som anställd och fylla i e-post och lösenord', () => {
        cy.visit('http://127.0.0.1:5501/anst%C3%A4lldLoggin.html');
        cy.contains('Logga in som anställd').should('be.visible');
        
        
        cy.get('#inputEmail').type('yuwaida@email.com');
        cy.get('#inputPassword').type('dittlösenord1');
    });
  });
  
  describe('Välkomstmeddelande', () => {
    it('Användare ska kunna se Välkommen tillbaka, vi har saknat dig!', () => {
        cy.visit('http://127.0.0.1:5501/anst%C3%A4lldLoggin.html');
        cy.contains('Välkommen tillbaka, vi har saknat dig!').should('be.visible');
        
        
        cy.get('#inputEmail').type('hejhej@email.com');
        cy.get('#inputPassword').type('dittlösenord2');
    });
  });
  
  describe('Epost och Lösenord', () => {
    it('Användare ska kunna se Epost och Lösenord och fylla i dem', () => {
        cy.visit('http://127.0.0.1:5501/anst%C3%A4lldLoggin.html');
        cy.contains('Epost').should('be.visible');
        cy.contains('Lösenord').should('be.visible');
        
        
        cy.get('#inputEmail').type('example@email.com');
        cy.get('#inputPassword').type('dittlösenord1');
    });
  });
  
  describe('Logga in knapp', () => {
    it('Användare ska kunna se Logga in knappen och fylla i e-post och lösenord', () => {
        cy.visit('http://127.0.0.1:5501/anst%C3%A4lldLoggin.html');
        cy.get('button').contains('Logga in').should('be.visible');
        
        
        cy.get('#inputEmail').type('din@email.com');
        cy.get('#inputPassword').type('dittlösenord');
    });
  });
  
  describe('Registreringslänk', () => {
    it('Användare ska kunna se Är du inte kund? och klicka på Skapa konto för att navigera till Registreringssida', () => {
        cy.visit('http://127.0.0.1:5501/anst%C3%A4lldLoggin.html');
        cy.contains('Är du inte kund?').should('be.visible');
        
        // Klicka på "Skapa konto"
        cy.contains('Skapa konto').click();
        
        // Verifiera att användaren har navigerat till Registreringssida
        cy.visit('http://127.0.0.1:5501/registrering.html');   
    });
  });
  