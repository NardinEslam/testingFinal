import UserActionsPage from '../support/POM/UserAction';

const userActions = new UserActionsPage();

const credentials = {
    email: 'hera@gmail.com',
    password: 'hera51551'
};
describe('User Logout & Delete', () => {
    beforeEach(() => {
        cy.loginViaUI(credentials); // using custom command
    });
    it('[1] should log out the user', () => {
        userActions.logout();
        userActions.verifyLogoutSuccess();
    });
    it('[2] should delete the user account', () => {
        userActions.deleteAccount();
        userActions.verifyAccountDeleted();
    });
});
