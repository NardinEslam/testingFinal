describe('Signup page',()=>{
    before(()=>{
        cy.visit("https://www.automationexercise.com/signup");
    })
    it.skip('[1] skipping the email field',()=>{
        cy.get('[data-qa="signup-name"]').type("nardin");
        cy.get('[data-qa="signup-button"]').click();
    })
    it.skip('[2] skipping the name field',()=>{
        cy.get('[data-qa="signup-email"]').type("nardineslam3@gmail.com");
        cy.get('[data-qa="signup-button"]').click();
    })
    it.skip('[3] invalid email field',()=>{
        cy.get('[data-qa="signup-name"]').type("nardin");
        cy.get('[data-qa="signup-email"]').type("nardineslam3");
        cy.get('[data-qa="signup-button"]').click();
    })
    it('[4] valid fields',()=>{
        cy.get('[data-qa="signup-name"]').type("nardin");
        cy.get('[data-qa="signup-email"]').type("nardineslam3@gmail.com");
        cy.get('[data-qa="signup-button"]').click();
    })
})