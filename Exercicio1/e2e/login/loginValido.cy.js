import userData from '../../../cypress/fixtures/userData.json'
import LoginPage from '../../../cypress/pages/loginPage'

const loginPage = new LoginPage()

describe('CT-01 - Login com sucesso', () => {
  it('Login com usuário válido', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
  })
})

