import userData from '../../../cypress/fixtures/userData.json'
import LoginPage from '../../../cypress/pages/loginPage'

const loginPage = new LoginPage()

describe('CT-02 - Login sem sucesso', () => {
  it('Login com usuário inválido', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
})