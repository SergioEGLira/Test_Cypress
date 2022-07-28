import PageYourPersonalInformation from '../../pageObjects/PageYourPersonalInformation'
describe('Suite de teste informações pessoais', function () 
{

    before(function() {
        cy.fixture('writingData').then(function(data)
        {
            this.data=data
        })        
    })

    it('Suite de teste informações pessoais', function () {
    
        const page = new PageYourPersonalInformation()

        cy.visit("http://automationpractice.com/index.php")

        page.getLogin()
                .click()

        page.getEmail()
                .type(this.data.email)

        page.getPasswd()
                .type(this.data.passwd)

        page.getClickLogin()
                .click()

        page.getAccountLoggedIn()
                .should('have.text', this.data.accountLoggedIn)
                        
        page.getClickMyPersonalInformation()
                .click()

        page.getCheckGender()
                .check()

        page.getFirstname()
                .should('have.value', this.data.firstname)

        page.getLastname()
                .should('have.value', this.data.lastname)

        page.getEmail()
                .should('have.value', this.data.email)

        page.getBirthDay()
                .select(this.data.birthDay)

        page.getBirthMonth()
                .select(this.data.birthMonth)

        page.getBirthYear()
                .select(this.data.birthYear)

        page.getOldPasswd()
                .type(this.data.passwd)

        page.getNewPasswd()
                .type(this.data.passwd)

        page.getConfirmNewPasswd()
                .type(this.data.passwd)

        page.getNewsletter()
                .should('not.be.checked')

        page.getReceiveSpecialOffers()
                .should('not.be.checked')

        page.getClickOk()
                .click()

        cy.wait(2000)  

        page.getTextSuccessfullyUpdated()
                .should('include.text', 'Your personal information has been successfully updated.')

        page.getClickHome()
                .click()

    })
})