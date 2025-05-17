import LoginPage from '../support/POM/Login';

const loginPage = new LoginPage();

describe('Login page', () => {
    beforeEach(() => {
        loginPage.visit();
    });

    it('[1] skipping the email field', () => {
        cy.login({ password: "nardin" });
    });

    it('[2] skipping the password field', () => {
        cy.login({ email: "nardineslam3@gmail.com" });
    });

    it('[3] invalid email format', () => {
        cy.login({ email: "nardineslam3", password: "nardin51551" });
    });

    it('[4] valid login', () => {
        cy.login({ email: "nardineslam3@gmail.com", password: "nardin51551" });
        loginPage.verifyLoginSuccess();
    });

    it('[5] incorrect password', () => {
        cy.login({ email: "nardineslam3@gmail.com", password: "wrongpass" });
        loginPage.verifyLoginError('Your email or password is incorrect!');
    });
});
