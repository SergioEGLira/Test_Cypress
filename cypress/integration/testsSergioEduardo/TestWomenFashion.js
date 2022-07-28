import PageWomenFashion from '../../pageObjects/PageWomenFashion'
describe('Suite de teste Women Fashion', function () 
{

    before(function() {
        cy.fixture('writingData').then(function(data)
        {
            this.data=data
        })        
    })

    it('Suite de teste Women Fashion', function () {

        const page = new PageWomenFashion()

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
      
    page.getWomen()
        .should('have.text', 'Women')
        .click()

    cy.selectProductByPrice3(this.data.priceOfTheProduct3)
        .get('div.breadcrumb.clearfix:nth-child(1) > a:nth-child(3)')
        .click()

    cy.selectProductByPrice3(this.data.priceOfTheProduct4)
        .get('div.breadcrumb.clearfix:nth-child(1) > a:nth-child(3)')
        .click()

    cy.selectProductByPrice3(this.data.priceOfTheProduct5)
        .get('div.breadcrumb.clearfix:nth-child(1) > a:nth-child(3)')
        .click()

    cy.selectProductByPrice3(this.data.priceOfTheProduct)
        .get('div.breadcrumb.clearfix:nth-child(1) > a:nth-child(3)')
        .click()

    cy.selectProductByPrice3(this.data.priceOfTheProduct6)
        .get('div.breadcrumb.clearfix:nth-child(1) > a:nth-child(3)')
        .click()

    cy.selectProductByPrice3(this.data.priceOfTheProduct2)
        .get('div.breadcrumb.clearfix:nth-child(1) > a:nth-child(3)')
        .click()

    cy.selectProductByPrice3(this.data.priceOfTheProduct7)
        .get('div.breadcrumb.clearfix:nth-child(1) > a:nth-child(3)')
        .click()

    page.getTops()
        .should('be.visible')
        .contains('Top')             
        .click()

    page.getTShirts()
        .should('have.text', 'T-shirts (1)')           
        .click()

    page.getSizeL()
        .should('have.text', 'L (1)')           
        .click()

    page.getOrange()
        .should('have.text', 'Orange (1)')
        .click()
 
    page.getMousemove()
        .trigger('mousemove')        
        .click()

    page.getMore()
        .should('have.text', 'More')
        .click()

    page.getFaded()
        .should('have.text', 'Faded Short Sleeve T-shirts')

    page.getValue()
        .should('have.text', '$16.51')

    page.getOneClick()
        .click()

    page.getValue2()
        .should('have.value', '2')

    page.getSizeM()
        .select('2')

    page.getColor14()
        .click()

    page.getAdd()
        .should('have.text', 'Add to cart')
        .click()

    page.getSuccessfully()
        .should('include.text', 'Product successfully added to your shopping cart')

    page.getSleeve()
        .should('have.text', 'Faded Short Sleeve T-shirts')
    
    page.getBlueM()
        .should('have.text', 'Blue, M')

    page.getQuantity2()
        .should('have.text', '2')

    page.getPrice()
        .should('have.text', '$33.02')

    page.getItems2()
        .should('include.text', 'There are 2 items in your cart.')
   
    page.getValue3()
        .should('have.text', '$33.02')

    page.getText2()
        .should('have.text', '$2.00')

    page.getText35()
        .should('have.text', '$35.02')

    page.getShopping()
        .should('include.text', 'Continue shopping')
        .click()
      
    })
})
