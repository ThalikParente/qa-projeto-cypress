describe('Transferência válida', () => {
  it('Realizar transferência para outra conta', () => {
    cy.visit('/')
    cy.get('#username').type('Heath93')
    cy.get('#password').type('s3cret')
    cy.get("[type='submit']").click()
    cy.get("[data-test='nav-top-new-transaction']").click()
    cy.get("#user-list-search-input[value='']").type('Darrel Ortiz')
    cy.get("[data-test='user-list-item-_XblMqbuoP']").click()
    cy.get("[placeholder='Amount']").type('5.00')
    cy.get("[placeholder='Add a note']").type('teste')
    cy.get("[data-test='transaction-create-submit-payment']").click()
    cy.get("[role='alert']").should('have.text', 'Transaction Submitted!')
  })
})

