class ContactUsPage {
    visit() {
        cy.visit("https://www.automationexercise.com/contact_us");
    }
    fillName(name) {
        cy.get('[data-qa="name"]').type(name);
    }
    fillEmail(email) {
        cy.get('[data-qa="email"]').type(email);
    }
    fillSubject(subject) {
        cy.get('[data-qa="subject"]').type(subject);
    }
    fillMessage(message) {
        cy.get('[data-qa="message"]').type(message);
    }
    attachFile(fileName) {
        cy.get('input[type="file"]').attachFile(fileName);
    }
    clickSubmit() {
        cy.get('[data-qa="submit-button"]').click();
    }
    clickHome() {
        cy.contains('Home').click();
    }
}

export const contactUsPage = new ContactUsPage();
