/// <reference types="cypress"/>

describe(" check out private offers", ()=>{

  beforeEach(()=>{
    cy.visit("http://127.0.0.1:5500/RYMDEN/index.html")
  })

  it("click button for private offer",()=>{
    cy.get("#button-private").click()
   
  }) 

})

describe(" check out private offers", ()=>{

  beforeEach(()=>{
    cy.visit("http://127.0.0.1:5500/RYMDEN/privatErbjudande.html")
  })

  it("click button for private offer",()=>{
   cy.get("#länk-index").click()
  }) 

})