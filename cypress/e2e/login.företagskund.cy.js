describe('Logga in som företagskund', () => {
    it('Användare ska kunna se Logga in som företagskund och fylla i e-post och lösenord', () => {
        cy.visit('http://127.0.0.1:5501/företagskundLoggin.html');
        cy.contains('Logga in som företagskund').should('be.visible');
        
        
        cy.get('#inputEmail').type('yuwaida@företag.se');
        cy.get('#inputPassword').type('dittlösenord1');
        
        
        cy.get('button').contains('Logga in').click();
    });
  });
  
  describe('Välkomstmeddelande', () => {
    it('Användare ska kunna se Välkommen tillbaka, vi har saknat dig!', () => {
        cy.visit('http://127.0.0.1:5501/företagskundLoggin.html');
        cy.contains('Välkommen tillbaka, vi har saknat dig!').should('be.visible');
        
        
        cy.get('#inputEmail').type('hejhej@foretag.com');
        cy.get('#inputPassword').type('dittlösenord2');
        
        
        cy.get('button').contains('Logga in').click();
    });
  });
  
  describe('Epost och Lösenord', () => {
    it('Användare ska kunna se Epost och Lösenord och fylla i dem', () => {
        cy.visit('http://127.0.0.1:5501/företagskundLoggin.html');
        cy.contains('Epost').should('be.visible');
        cy.contains('Lösenord').should('be.visible');
        
        
        cy.get('#inputEmail').type('example@email.com');
        cy.get('#inputPassword').type('dittlösenord1');
    });
  });
  
  describe('Logga in knapp', () => {
    it('Användare ska kunna se Logga in knappen och fylla i e-post och lösenord', () => {
        cy.visit('http://127.0.0.1:5501/företagskundLoggin.html');
        cy.get('button').contains('Logga in').should('be.visible');
        
        
        cy.get('#inputEmail').type('din@email.com');
        cy.get('#inputPassword').type('dittlösenord');
        
        
        cy.get('button').contains('Logga in').click();
    });
  });
  
  describe('Registreringslänk', () => {
    it('Användare ska kunna se Är du inte kund? och klicka på Skapa konto för att navigera till Registreringssida', () => {
        cy.visit('http://127.0.0.1:5501/företagskundLoggin.html');
        cy.contains('Är du inte kund?').should('be.visible');
        
        // Klicka på "Skapa konto"
        cy.contains('Skapa konto').click();
        
        // Verifiera att användaren har navigerat till Registreringssida
        cy.visit('http://127.0.0.1:5501/registrering.html');   
     });
  });
  