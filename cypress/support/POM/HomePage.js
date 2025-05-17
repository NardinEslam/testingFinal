class HomePage {
    visit() {
        cy.visit('https://www.automationexercise.com');
    }

    verifyNavigationMenu() {
        cy.get('.logo').should('be.visible');
        cy.get('.nav').should('be.visible');
        cy.title().should('include', 'Automation Exercise');
    }

    verifyFeaturedProducts() {
        cy.get('.features_items').should('be.visible');
        cy.get('.product-image-wrapper').its('length').should('be.gt', 0);
        cy.title().should('include', 'Automation Exercise');
    }

    addFirstProductToCart() {
        cy.get('.product-image-wrapper').first().trigger('mouseover');
        cy.contains('Add to cart').first().click();
        cy.get('#cartModal').should('be.visible');
        cy.contains('Continue Shopping').click();
    }

    goToCartAndVerifyProduct() {
        cy.contains('Cart').click();
        cy.url().should('include', '/view_cart');
        cy.get('.cart_info').should('contain', 'Rs');
    }

    navigateToFirstProductDetails() {
        cy.contains('View Product').first().click();
    }

    verifyProductDetailsPage() {
        cy.url().should('include', '/product_details');
        cy.get('.product-information').should('be.visible');
        cy.contains('Category').should('exist');
    }
}

export default HomePage;
