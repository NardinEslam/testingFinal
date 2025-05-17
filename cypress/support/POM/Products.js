class ProductsPage {
    visit() {
        cy.visit('https://www.automationexercise.com/products');
    }

    verifyProductsPageLoaded() {
        cy.contains('All Products').should('be.visible');
        cy.get('.product-image-wrapper').its('length').should('be.gte', 1);
    }

    verifyProductListVisible() {
        cy.get('.features_items .product-image-wrapper').each(($el) => {
            cy.wrap($el).should('be.visible');
        });
    }

    openFirstProductDetails() {
        cy.contains('View Product').first().click();
    }

    verifyProductDetailsVisible() {
        cy.url().should('include', '/product_details');
        cy.get('.product-information').should('be.visible');
        cy.contains('Availability').should('exist');
    }

    searchForProduct(productName) {
        cy.get('#search_product').type(productName);
        cy.get('#submit_search').click();
    }

    verifySearchResults() {
        cy.url().should('include', 'search');
        cy.contains('Searched Products').should('be.visible');
        cy.get('.product-image-wrapper').should('have.length.greaterThan', 0);
    }

    addFirstProductToCart() {
        cy.get('.product-image-wrapper').first().trigger('mouseover');
        cy.contains('Add to cart').first().click();
    }

    continueShopping() {
        cy.get('#cartModal').should('be.visible');
        cy.contains('Continue Shopping').click();
    }

    goToCartAndVerify() {
        cy.contains('Cart').click();
        cy.url().should('include', '/view_cart');
        cy.get('.cart_info').should('contain', 'Rs');
    }
}

export default ProductsPage;
