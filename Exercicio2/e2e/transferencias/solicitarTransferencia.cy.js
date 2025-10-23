import LoginPage from "../../../cypress/pages/loginPage"
import userData from "../../../cypress/fixtures/userData.json"
import TransferPage from "../../../cypress/pages/transferPage"

const loginPage = new LoginPage()
const transferPage = new TransferPage()

describe('CT-03 - Solicitar transferência', () => {
    
  beforeEach(() => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
  })
  it('Solicitar transferência de valor', () => {
     transferPage.validRequest()  
   })
})
  