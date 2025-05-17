class SignupPage {
    visit() {
        cy.visit("https://www.automationexercise.com/signup");
    }

    enterName(name) {
        cy.get('[data-qa="signup-name"]').type(name);
    }

    enterEmail(email) {
        cy.get('[data-qa="signup-email"]').type(email);
    }

    clickSignup() {
        cy.get('[data-qa="signup-button"]').click();
    }

    verifyEmailExistsError() {
        cy.contains('Email Address already exist!');
    }

    fillFullForm(user) {
        cy.get('#id_gender2').check();
        cy.get('#password').type(user.password);
        cy.get('#days').select(user.day);
        cy.get('#months').select(user.month);
        cy.get('#years').select(user.year);
        cy.get('#first_name').type(user.firstName);
        cy.get('#last_name').type(user.lastName);
        cy.get('#address1').type(user.address);
        cy.get('#state').type(user.state);
        cy.get('#city').type(user.city);
        cy.get('#zipcode').type(user.zipcode);
        cy.get('#mobile_number').type(user.mobile);
        cy.get('[data-qa="create-account"]').click();
    }

    verifyAccountCreated() {
        cy.contains('Account Created!');
    }

    clickContinueAfterCreation() {
        cy.get('[data-qa="continue-button"]').click();
    }
}

export default SignupPage;
