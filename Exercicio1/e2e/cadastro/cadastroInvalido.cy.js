import RegisterPage from '../../../cypress/pages/registerPage'
import LoginPage from '../../../cypress/pages/loginPage'

const Chance = require('chance');

const chance = new Chance();

const loginPage = new LoginPage()
const registerPage = new RegisterPage()

describe('CT-04 - Cadastro com dados inválidos', () => {

  it('Cadastro com nome não preenchido', () => {
    cy.visit('/')
    loginPage.accessLoginPage()
    registerPage.registerWithNoFirstNameFilled(chance.last(), chance.sentence({ words: 1 }))
  })


  it('Cadastro com sobrenome não preenchido', () => {
    cy.visit('/')
    loginPage.accessLoginPage()
    registerPage.registerWithNoLastNameFilled(chance.first(), chance.sentence({ words: 1 }))
  })

  it('Cadastro com username não preenchido', () => {
    cy.visit('/')
    loginPage.accessLoginPage()
    registerPage.registerWithNoUsernameNameFilled(chance.first(), chance.last())
  })

  it('Cadastro com password não preenchido', () => {
    cy.visit('/')
    loginPage.accessLoginPage()
    registerPage.registerWithNoPasswordNameFilled(chance.first(), chance.last(), chance.sentence({ words: 1 }))
  })
})