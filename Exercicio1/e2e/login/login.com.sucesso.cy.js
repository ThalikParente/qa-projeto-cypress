describe('Login com sucesso', () => {
  it('Login com usuário válido', () => {
    cy.visit('/')
    cy.get('#username').type('Heath93')
    cy.get('#password').type('s3cret')
    cy.get("[type='submit']").click()
  })
})

