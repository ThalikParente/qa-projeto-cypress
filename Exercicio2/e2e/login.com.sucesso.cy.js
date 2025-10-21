describe('Login com sucesso', () => {
  it('Login com usuário válido', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('Heath93')
    cy.get('#password').type('s3cret')
    cy.get("[type='submit']").click()
  })
})

