class TransferPage {
    selectorsList() {
        const selectors = {
            newTransferButton: "[data-test='nav-top-new-transaction']",
            userSelect: "[data-test='user-list-item-_XblMqbuoP']",
            amountField: "[placeholder='Amount']",
            noteField: "[placeholder='Add a note']",
            payButton: "[data-test='transaction-create-submit-payment']",
            requestButton: "[data-test='transaction-create-submit-request']",            confirmationAllert: "[role='alert']",
        }

        return selectors
    }

    validTransfer() {
        cy.get(this.selectorsList().newTransferButton).click()
        cy.get(this.selectorsList().userSelect).type('Darrel Ortiz')
        cy.get(this.selectorsList().amountField).type("500")
        cy.get(this.selectorsList().noteField).type('teste')
        cy.get(this.selectorsList().payButton).click()
        cy.get(this.selectorsList().confirmationAllert).should('have.text', 'Transaction Submitted!')
    }

    invalidTransfer() {
        cy.get(this.selectorsList().newTransferButton).click()
        cy.get(this.selectorsList().userSelect).type('Darrel Ortiz')
        cy.get(this.selectorsList().amountField).type("5000")
        cy.get(this.selectorsList().noteField).type('teste')
        cy.get(this.selectorsList().payButton).click()
        cy.contains('Saldo insuficiente para realizar a transação.').should('be.visible')
        }

    validRequest() {
        cy.get(this.selectorsList().newTransferButton).click()
        cy.get(this.selectorsList().userSelect).type('Darrel Ortiz')
        cy.get(this.selectorsList().amountField).type("50000")
        cy.get(this.selectorsList().noteField).type('teste')
        cy.get(this.selectorsList().requestButton).click()
        cy.get(this.selectorsList().confirmationAllert).should('have.text', 'Transaction Submitted!')
    }
}


export default TransferPage