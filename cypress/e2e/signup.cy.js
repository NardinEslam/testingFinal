import SignupPage from '../support//POM/SignUp';

const signupPage = new SignupPage();

describe('Signup page', () => {
    beforeEach(() => {
        signupPage.visit();
    });

    it('[1] skipping all fields', () => {
        signupPage.clickSignup();
    });

    it('[2] skipping the email field', () => {
        cy.signup({ name: "nardin" }); // using custom command
    });

    it('[3] skipping the name field', () => {
        cy.signup({ email: "nardineslam3@gmail.com" }); // using custom command
    });

    it('[4] invalid email field', () => {
        cy.signup({ name: "nardin", email: "invalidemail" });
    });

    it('[5] have an account already', () => {
        cy.signup({ name: "nardin", email: "nardineslam3@gmail.com" });
        signupPage.verifyEmailExistsError();
    });

    it('[6] new user registration', () => {
        cy.signup({ name: "Hera", email: "hera@gmail.com" });

        signupPage.fillFullForm({
            password: "hera51551",
            day: "1",
            month: "August",
            year: "2002",
            firstName: "Hera",
            lastName: "Eslam",
            address: "22 somouha",
            state: "California",
            city: "San Francisco",
            zipcode: "94101",
            mobile: "1234567890"
        });

        signupPage.verifyAccountCreated();
        signupPage.clickContinueAfterCreation();
    });
});
