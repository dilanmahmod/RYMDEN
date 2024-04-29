describe(" check out företags offers", ()=>{

  beforeEach(()=>{
    cy.visit("http://127.0.0.1:5500/RYMDEN/index.html")
  })

  it("click button for företag offer",()=>{
    cy.get("#button-företag").click()
   
  }) 

})

describe(" go back to index", ()=>{

  beforeEach(()=>{
    cy.visit("http://127.0.0.1:5500/RYMDEN/företagErbjudande.html")
  })

  it("click button for private offer",()=>{
   cy.get("#länk-index").click()
  }) 

})