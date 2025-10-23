class RegisterPage {
    selectorsList() {
        const selectors = {
            beginRegisterButton: "[data-test='signup']",
            firstNameField: "#firstName",
            lastNameField: "#lastName",
            usernameField: "#username",
            passwordField: "#password",
            confirmPasswordField: "#confirmPassword",
            signUpButton: "[data-test='signup-submit']"
        }

        return selectors
    }

    registerInformation() {
        cy.get(this.selectorsList().beginRegisterButton).click()
        cy.get(this.selectorsList().firstNameField).type("Teste")
        cy.get(this.selectorsList().lastNameField).type("Teste")
        cy.get(this.selectorsList().usernameField).type("Teste")
        cy.get(this.selectorsList().passwordField).type("Teste")
        cy.get(this.selectorsList().confirmPasswordField).type("Teste")
        cy.get(this.selectorsList().signUpButton).click()
    }

        registerWithNoFirstNameFilled(lastName, userName) {
        cy.get(this.selectorsList().beginRegisterButton).click()
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(userName)
        cy.get(this.selectorsList().passwordField).type("Teste")
        cy.get(this.selectorsList().confirmPasswordField).type("Teste")
        cy.get(this.selectorsList().signUpButton).click()
}

       registerWithNoLastNameFilled(firstName, userName) {
        cy.get(this.selectorsList().beginRegisterButton).click()
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().usernameField).type(userName)
        cy.get(this.selectorsList().passwordField).type("Teste")
        cy.get(this.selectorsList().confirmPasswordField).type("Teste")
        cy.get(this.selectorsList().signUpButton).click()
}

       registerWithNoUsernameNameFilled(firstName, lastName) {
        cy.get(this.selectorsList().beginRegisterButton).click()
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().passwordField).type("Teste")
        cy.get(this.selectorsList().confirmPasswordField).type("Teste")
        cy.get(this.selectorsList().signUpButton).click()
}
       registerWithNoPasswordNameFilled(firstName, lastName, userName) {
        cy.get(this.selectorsList().beginRegisterButton).click()
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(userName)
        cy.get(this.selectorsList().confirmPasswordField).type("Teste")
        cy.get(this.selectorsList().signUpButton).click()
}
}

export default RegisterPage