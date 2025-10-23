class HistoricoPage {
    selectorsList() {
        const selectors = {
            mineButton: "[href='/personal']",
            dialog: "[role='dialog']",
            nextButton: "[data-test='user-onboarding-next']",
            bankNameField: "[placeholder='Bank Name']",
            routingNumberField: "[placeholder='Routing Number']",
            accountNumberField: "[placeholder='Account Number']",
            bankSubmitButton: "[data-test='bankaccount-submit']",
            emptyListHeader: "[data-test='empty-list-header']",

        }

        return selectors
    }

    viewMyBankHistory() {
        cy.get(this.selectorsList().mineButton).click()
    }

    handleOnboardingIfVisible() {
    cy.wait(1000);

    cy.get('body').then(($body) => {
      if ($body.find(this.selectorsList().dialog).length > 0) {
        cy.get(this.selectorsList().nextButton).should('be.visible').click();
        cy.get(this.selectorsList().bankNameField).type('1234567');
        cy.get(this.selectorsList().routingNumberField).type('123456789');
        cy.get(this.selectorsList().accountNumberField).type('123456789');
        cy.get(this.selectorsList().bankSubmitButton).click();
        cy.get(this.selectorsList().nextButton).should('be.visible').click();
      }
    })
  }

  accessPersonalTransfers () {
    cy.get(this.selectorsList().mineButton).click();
  }

  verifyNoTransactions() {
    cy.get(this.selectorsList().emptyListHeader)
      .should('contain.text', 'No Transactions');
  }
}

export default HistoricoPage