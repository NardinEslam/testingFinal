import ProductsPage from '../support/POM/Products';

const productsPage = new ProductsPage();

describe('Products Page Tests - Automation Exercise', () => {
    beforeEach(() => {
        productsPage.visit();
    });

    it('[1] should load the products page', () => {
        productsPage.verifyProductsPageLoaded();
    });

    it('[2] should display product list', () => {
        productsPage.verifyProductListVisible();
    });

    it('[3] should open product detail page when clicking View Product', () => {
        productsPage.openFirstProductDetails();
        productsPage.verifyProductDetailsVisible();
    });

    it('[4] should search for a product and show results', () => {
        cy.searchProduct('dress'); // using custom command
        productsPage.verifySearchResults();
    });

    it('[5] should add a product to cart from products page', () => {
        productsPage.addFirstProductToCart();
        productsPage.continueShopping();
        productsPage.goToCartAndVerify();
    });
});
