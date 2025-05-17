import { cart } from '../support/POM/Cart';

describe('Cart Page Tests - Automation Exercise', () => {
    beforeEach(() => {
        cy.addFirstProductToCart();
    });

    it('[1] should load the cart page', () => {
        cart.verifyCartPageLoaded();
    });
    it('[2] should display added product in cart', () => {
        cart.verifyProductInCart();
    });
    it('[3] should delete product from cart', () => {
        cart.deleteProductFromCart();
        cart.verifyCartIsEmpty();
    });
    it('[4] should navigate to cart using navbar', () => {
        cart.clickCartInNavbar();
        cart.verifyCartPageLoaded();
    });
    it('[5] should proceed to checkout (if visible)', () => {
        // Reset flow to ensure product is added again
        cy.visit('https://www.automationexercise.com');
        cy.addFirstProductToCart();
        cart.proceedToCheckout();
    });

});
