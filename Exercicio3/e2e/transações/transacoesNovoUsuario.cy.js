import userData from "../../../cypress/fixtures/userData.json"
import LoginPage from "../../../cypress/pages/loginPage"
import RegisterPage from "../../../cypress/pages/registerPage"
import HistoricoPage from "../../../cypress/pages/historicoPage"

const loginPage = new LoginPage()
const registerPage = new RegisterPage()
const historicoPage = new HistoricoPage()


describe('CT-02 - Histórico transações novo usuário', () => {

it('Visualizar histórico de transações de novo usuário', () => {
  loginPage.accessLoginPage();
  registerPage.registerInformation();
  loginPage.loginWithDefaultUser(userData.userDefault.username, userData.userDefault.password)
  historicoPage.handleOnboardingIfVisible();
  historicoPage.accessPersonalTransfers();
  historicoPage.verifyNoTransactions();
})
})