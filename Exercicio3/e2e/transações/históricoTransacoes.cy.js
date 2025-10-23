import LoginPage from "../../../cypress/pages/loginPage"
import userData from "../../../cypress/fixtures/userData.json"
import HistoricoPage from "../../../cypress/pages/historicoPage"

const loginPage = new LoginPage()
const historicoPage = new HistoricoPage()

describe('CT-01 - Visualizar histórico de transações', () => {
    beforeEach(() => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
  })
  it('Visualizar o histórico das transações do usuário logado', () => {
    historicoPage.viewMyBankHistory()
    })
})
