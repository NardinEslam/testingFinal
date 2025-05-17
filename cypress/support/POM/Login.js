class LoginPage {
    visit() {
        cy.visit("https://www.automationexercise.com/login");
    }

    enterEmail(email) {
        cy.get('[data-qa="login-email"]').type(email);
    }

    enterPassword(password) {
        cy.get('[data-qa="login-password"]').type(password);
    }

    clickLogin() {
        cy.get('[data-qa="login-button"]').click();
    }

    verifyLoginSuccess() {
        cy.url().should('eq', 'https://www.automationexercise.com/');
    }

    verifyLoginError(message) {
        cy.contains(message);
    }
}

export default LoginPage;
