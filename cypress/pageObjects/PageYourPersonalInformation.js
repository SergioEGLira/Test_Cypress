class PageYourPersonalInformation {

    getLogin() {
        return cy.xpath("//a[contains(text(),'Sign in')]")
    }

    getEmail() {
        return cy.xpath("//input[@id='email']")
    }

    getPasswd() {
        return cy.xpath("//input[@id='passwd']")
    }

    getClickLogin() {
        return cy.xpath("//p[2]/button[1]/span[1]")
    }

    getAccountLoggedIn() {
        return cy.xpath("//span[contains(text(),'Sergio Eduardo')]")
    }

    getClickMyPersonalInformation() {
        return cy.xpath("//span[contains(text(),'My personal information')]")
    }

    getCheckGender() {
        return cy.xpath("//input[@id='id_gender1']")
    }

    getFirstname() {
        return cy.xpath("//input[@id='firstname']")
    }

    getLastname() {
        return cy.xpath("//input[@id='lastname']")
    }

    getEmail() {
        return cy.xpath("//input[@id='email']")
    }

    getBirthDay() {
        return cy.xpath("//select[@id='days']")
    }

    getBirthMonth() {
        return cy.xpath("//select[@id='months']")
    }

    getBirthYear() {
        return cy.xpath("//select[@id='years']")
    }

    getOldPasswd() {
        return cy.xpath("//input[@id='old_passwd']")
    }

    getNewPasswd() {
        return cy.xpath("//input[@id='passwd']")
    }

    getConfirmNewPasswd() {
        return cy.xpath("//input[@id='confirmation']")
    }

    getNewsletter() {
        return cy.xpath("//input[@id='newsletter']")
    }

    getReceiveSpecialOffers() {
        return cy.xpath("//input[@id='optin']")
    }

    getClickOk() {
        return cy.xpath("//div[11]/button[1]/span[1]")
    }

    getTextSuccessfullyUpdated() {
        return cy.xpath("//p[contains(text(),'Your personal information has been successfully updated.')]")
    }

    getClickHome() {
        return cy.xpath("//div[1]/ul[1]/li[2]/a[1]/span[1]")
    }

}

export default PageYourPersonalInformation;