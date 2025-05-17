//login page
Cypress.Commands.add('login', ({ email, password }) => {
    if (email) cy.get('[data-qa="login-email"]').type(email);
    if (password) cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
});
//product page
Cypress.Commands.add('searchProduct', (name) => {
    cy.get('#search_product').type(name);
    cy.get('#submit_search').click();
});
//signup page
Cypress.Commands.add('signup', ({ name, email }) => {
    if (name) cy.get('[data-qa="signup-name"]').type(name);
    if (email) cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
});
//login page
Cypress.Commands.add('loginViaUI', ({ email, password }) => {
    cy.visit('https://www.automationexercise.com/login');
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
    cy.contains('Logged in as').should('be.visible');
});
//action user page
Cypress.Commands.add('logoutUser', () => {
    cy.contains('Logout').click();
    cy.url().should('include', '/login');
    cy.contains('Login to your account');
});
Cypress.Commands.add('deleteUserAccount', () => {
    cy.contains('Delete Account').click();
    cy.contains('Account Deleted!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
});
//home page 
Cypress.Commands.add('addFirstProductToCart', () => {
    cy.get('.product-image-wrapper').first().trigger('mouseover');
    cy.contains('Add to cart').first().click();
    cy.get('#cartModal').should('be.visible');
    cy.contains('Continue Shopping').click();
});
Cypress.Commands.add('verifyCartHasItems', () => {
    cy.contains('Cart').click();
    cy.url().should('include', '/view_cart');
    cy.get('.cart_info').should('contain', 'Rs');
});
//contact-us
Cypress.Commands.add('fillContactForm', ({ name, email, subject, message, file }) => {
    if (name) cy.get('[data-qa="name"]').type(name);
    if (email) cy.get('[data-qa="email"]').type(email);
    if (subject) cy.get('[data-qa="subject"]').type(subject);
    if (message) cy.get('[data-qa="message"]').type(message);
    if (file) cy.get('input[type="file"]').attachFile(file);
});
//cart
Cypress.Commands.add('addFirstProductToCart', () => {
    cy.visit('https://www.automationexercise.com');
    cy.get('.product-image-wrapper').first().trigger('mouseover');
    cy.contains('Add to cart').first().click();
    cy.get('#cartModal').should('be.visible');
    cy.contains('View Cart').click();
});





import 'cypress-file-upload';

