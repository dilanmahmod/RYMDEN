
describe('Navigering och inloggning', () => {
  beforeEach(() => {
  cy.visit('http://127.0.0.1:5500/RYMDEN/')
  })

it('navigation to "om oss" ', () => {

cy.get('li.nav-item').contains('Om oss').click()
cy.url().should('include', '/omoss.html')

})

it('navigation to "kontakt"', () => {
cy.get('li.nav-item').contains('Kontakt').click()
cy.url().should('include', '/kontakt.html')

})

it('navigation to "privatkund "', () => {
cy.get('li.nav-item.dropdown').contains('Privatkund').click()
cy.url().should('include', '/privatkundLoggin.html')

})

it('navigation to "företagskund"', () => {
cy.get('li.nav-item.dropdown').contains('Företagskund').click()
cy.url().should('include', 'http://127.0.0.1:5500/RYMDEN/f%C3%B6retagskundLoggin.html')

})

it('navigation to "anställd"', () => {
cy.get('li.nav-item.dropdown').contains('Anställd').click()
cy.url().should('include', 'http://127.0.0.1:5500/RYMDEN/anst%C3%A4lldLoggin.html')

})

})