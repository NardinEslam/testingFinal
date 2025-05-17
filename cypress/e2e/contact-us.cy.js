import { contactUsPage } from '../support/pageObjects/ContactUsPage';

describe('Contact Us Page', () => {

    beforeEach(() => {
        contactUsPage.visit();
    });

    it.skip('[1] skipping all fields', () => {
        contactUsPage.clickSubmit();
    });

    it.skip('[2] only name filled', () => {
        contactUsPage.fillName("Nardin");
        contactUsPage.clickSubmit();
    });

    it.skip('[3] only email filled', () => {
        contactUsPage.fillEmail("hera@gmail.com");
        contactUsPage.clickSubmit();
    });

    it.skip('[4] only subject filled', () => {
        contactUsPage.fillSubject("ay haga");
        contactUsPage.clickSubmit();
    });

    it.skip('[5] only message filled', () => {
        contactUsPage.fillMessage("Some long test message for validation");
        contactUsPage.clickSubmit();
    });

    it('[6] only file attached', () => {
        contactUsPage.attachFile('deep1.docx');
        contactUsPage.clickSubmit();
    });

    it.only('[7] all fields filled', () => {
        contactUsPage.fillName("Nardin");
        contactUsPage.fillEmail("hera@gmail.com");
        contactUsPage.fillSubject("ay haga");
        contactUsPage.fillMessage("Full message body with real content.");
        contactUsPage.attachFile('deep1.docx');
        contactUsPage.clickSubmit();
        contactUsPage.clickHome();
    });

});
