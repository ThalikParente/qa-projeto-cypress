
const chance = require('chance').Chance();
const firstName = chance.first();
const lastName = chance.last();
const username = chance.sentence({ words: 1 });

describe('Cadastro com sucesso', () => {
       
  it('Cadastro com dados válidos', () => {
    cy.visit('/')
    cy.get("[data-test='signup']").click()
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#username').type(username)
    cy.get('#password').type('1234')
    cy.get('#confirmPassword').type('1234')
    cy.get("[type='submit']").click()
    cy.get('#username').type('Heath93')
    cy.get('#password').type('s3cret')
    cy.get("[type='submit']").click()
  })
})
