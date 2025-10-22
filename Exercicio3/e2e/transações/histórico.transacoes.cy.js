describe('Visualizar histórico de transações', () => {
  it('Visualizar o histórico das transações do usuário logado', () => {
    cy.visit('/')
    cy.get('#username').type('Heath93')
    cy.get('#password').type('s3cret')
    cy.get("[type='submit']").click()
    cy.get("[href='/personal']").click()
    })
})
