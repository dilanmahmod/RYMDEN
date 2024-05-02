describe('Test av registreringsformulär', () => {

    it('Visar registreringsformuläret korrekt', () => {
        cy.visit('http://127.0.0.1:5501/registrering.html'); // Besök sidan 
        cy.contains('Registrera dig'); // Här ska det kontrolleras om sidan innehåller texten "Registrera dig"
        cy.get('form').should('exist'); // Här ska det kontrolleras om formuläret finns
    });

    it('Kan skicka in registreringsformuläret', () => {
        
        cy.visit('http://127.0.0.1:5501/registrering.html'); 
        cy.get('#firstName').type('Dilan'); 
        cy.get('#lastName').type('M'); 
        cy.get('#inputAdress').type('Gamlavägen 3'); 
        cy.get('#inputPostnummer').type('90001'); 
        cy.get('#inputPostort').type('Stockholm'); 
        cy.get('#personnummer').type('123456-7890'); 
        cy.get('form').submit(); // Skicka in formuläret
        
    });
});
