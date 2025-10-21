describe('Login inválido', () => {
  it('Login com usuário inválido', () => {
    cy.visit('/')
    cy.get('#username').type('Teste')
    cy.get('#password').type('Teste')
    cy.get("[type='submit']").click()
    cy.get("[role='alert']")
    cy.contains('Username or password is invalid')
  })
})