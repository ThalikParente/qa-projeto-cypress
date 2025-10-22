describe('Histórico transações novo usuário', () => {

  it('Visualizar histórico de transações de novo usuário', () => {
    cy.visit('/')
    cy.get("[data-test='signup']").click()
    cy.get('#firstName').type('teste')
    cy.get('#lastName').type('teste')
    cy.get('#username').type('teste')
    cy.get('#password').type('1234')
    cy.get('#confirmPassword').type('1234')
    cy.get("[type='submit']").click()

    cy.get('#username').type('teste')
    cy.get('#password').type('1234')
    cy.get("[type='submit']").click()

cy.get('body').then(($body) => {
  if ($body.find("[data-test='user-onboarding-next']").length > 0) {
    cy.get("[data-test='user-onboarding-next']").then(($btn) => {
      if ($btn.is(':visible')) {
        cy.get("[data-test='user-onboarding-next']").click()
        cy.get("[placeholder='Bank Name']").type('1234567')
        cy.get("[placeholder='Routing Number']").type('123456789')
        cy.get("[placeholder='Account Number']").type('123456789')
        cy.get("[data-test='bankaccount-submit']").click()
        cy.get("[data-test='user-onboarding-next']").click()
      }
    })
  } else {
    cy.log('Onboarding não necessário.')
  }
  cy.get("[href='/personal']").click()
  cy.get("[data-test='empty-list-header']").should('have.text', 'No Transactions')
})

    })
  })  

