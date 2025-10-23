import LoginPage from "../../../cypress/pages/loginPage"
import userData from "../../../cypress/fixtures/userData.json"
import TransferPage from "../../../cypress/pages/transferPage"

const loginPage = new LoginPage()
const transferPage = new TransferPage()

describe('CT-02 - Transferência inválida', () => {
    
  beforeEach(() => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
  })
  it('Tentar realizar transferência com saldo insuficiente', () => {
     transferPage.invalidTransfer()  
   })
})
