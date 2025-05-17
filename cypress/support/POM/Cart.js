class Cart {
    verifyCartPageLoaded() {
        cy.url().should('include', '/view_cart');
        cy.contains('Shopping Cart').should('be.visible');
    }

    verifyProductInCart() {
        cy.get('.cart_info').should('contain', 'Rs');
        cy.get('.cart_description').should('be.visible');
        cy.get('td.cart_quantity').should('contain', '1');
    }

    deleteProductFromCart() {
        cy.get('.cart_delete a').click();
    }

    verifyCartIsEmpty() {
        cy.contains('Cart is empty').should('be.visible');
    }

    proceedToCheckout() {
        cy.contains('Proceed To Checkout').click();
    }

    clickCartInNavbar() {
        cy.contains('Cart').click();
    }
}

export const cart = new Cart();
