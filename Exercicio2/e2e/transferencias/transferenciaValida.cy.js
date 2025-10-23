import LoginPage from "../../../cypress/pages/loginPage"
import userData from "../../../cypress/fixtures/userData.json"
import TransferPage from "../../../cypress/pages/transferPage"

const loginPage = new LoginPage()
const transferPage = new TransferPage()

describe('CT-01 - Transferência válida', () => {
  
  beforeEach(() => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
  })
  it('Realizar transferência para outra conta', () => {
    transferPage.validTransfer()  
   })
})

