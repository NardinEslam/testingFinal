import HomePage from '../support/POM/HomePage';

const homePage = new HomePage();

describe('Home Page Tests - Automation Exercise', () => {

    beforeEach(() => {
        homePage.visit();
    });

    it('should display navigation menu', () => {
        homePage.verifyNavigationMenu();
    });

    it('should show featured products', () => {
        homePage.verifyFeaturedProducts();
    });

    it('should add a product to cart from home page', () => {
        homePage.addFirstProductToCart();
        homePage.goToCartAndVerifyProduct();
    });

    it('should navigate to product details page from home page', () => {
        homePage.navigateToFirstProductDetails();
        homePage.verifyProductDetailsPage();
    });

});
