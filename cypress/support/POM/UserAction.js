class UserActionsPage {
    login(email, password) {
        cy.visit('https://www.automationexercise.com/login');
        cy.get('[data-qa="login-email"]').type(email);
        cy.get('[data-qa="login-password"]').type(password);
        cy.get('[data-qa="login-button"]').click();
        cy.contains('Logged in as').should('be.visible');
    }

    logout() {
        cy.contains('Logout').click();
    }

    verifyLogoutSuccess() {
        cy.url().should('include', '/login');
        cy.contains('Login to your account');
    }

    deleteAccount() {
        cy.contains('Delete Account').click();
    }

    verifyAccountDeleted() {
        cy.contains('Account Deleted!').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
        cy.url().should('eq', 'https://www.automationexercise.com/');
    }
}

export default UserActionsPage;
