describe('Cadastro com sucesso', () => {

    var Chance = require('chance')
    
  it('Cadastro com dados válidos', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("[data-test='signup']").click()
  })
})
