import userData from '../../../cypress/fixtures/userData.json'
import RegisterPage from '../../../cypress/pages/registerPage'
import LoginPage from '../../../cypress/pages/loginPage'

const loginPage = new LoginPage()
const registerPage = new RegisterPage()

describe('CT-03 - Cadastro com sucesso', () => {
       
  it('Cadastro com dados válidos', () => {
    loginPage.accessLoginPage()
    registerPage.registerInformation()
    loginPage.loginWithDefaultUser(userData.userDefault.username, userData.userDefault.password)
  })
})
