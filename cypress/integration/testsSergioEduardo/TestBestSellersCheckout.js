import PageBestSellersCheckout from '../../pageObjects/PageBestSellersCheckout'
describe('Suite de teste Best Sellers Checkout', function () 
{

    before(function() {
        cy.fixture('writingData').then(function(data)
        {
            this.data=data
        })        
    })

    it('Suite de teste Best Sellers Checkout', function () {

        const page = new PageBestSellersCheckout()
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

    page.getHome()
        .should('have.text', ' Home')
        .click()

    page.getBest()
        .should('have.text', 'Best Sellers')
        .click()


    page.getLength()
        .children('.ajax_block_product ')
        .should('have.length', 7)
        .contains('li', '-5%')

    page.getEq5()
        .children('.ajax_block_product')
        .eq(5)
        .should('contain', '$30.50')
        .should('contain', 'Printed Summer Dress')

        cy.selectProductByPrice(this.data.priceOfTheProduct)
 
    page.getProceed()
        .should('include.text', 'Proceed to checkout')
        .click()

    page.getClick()     
        .click()

    page.getOut()
        .should('include.text', 'Check out')
        .click({force: true})

    page.getDress()
        .should('include.text', 'Printed Dress')

    page.getBeige()
        .should('include.text', 'Color : Beige, Size : S')

    page.getInStock()
        .should('include.text', 'In stock')

    page.getPrice50()
        .should('include.text', '$50.99')

    page.getDblclick()
        .dblclick()

    page.getValue3()
        .should('have.value', '3')

    page.getPrice152()
        .should('include.text', '$152.97')
 
    page.getText152()
        .should('have.text', '$152.97')

    page.getValue2()
        .should('have.text', '$2.00')

    page.getPrice154()
        .should('have.text', '$154.97')

    page.getText00()
        .should('have.text', '$0.00')

    page.getProceed2()
        .should('include.text', 'Proceed to checkout')
        .click()   

    page.getKindly()
     .type('Kindly deliver the product in the morning. And be very careful with my order!')

    page.getProceed3()
        .should('include.text', 'Proceed to checkout')
        .click()   
    
    page.getAgree()
        .should('include.text', 'I agree to the terms of service and will adhere to them unconditionally.')
        .click()   
        
    page.getChecked()
        .should('be.checked')
    
    page.getProceed4()
        .should('include.text', 'Proceed to checkout')
        .click()   

    page.getPay()
        .should('include.text', 'Pay by bank wire')
        .click()   

    page.getOrder()
        .should('include.text', 'I confirm my order')
        .click()   

    page.getValue154()
        .children('.box')
        .contains('.price', '$154.97')

    })
})