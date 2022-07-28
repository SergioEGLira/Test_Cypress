import PageDresses from '../../pageObjects/PageDresses'
describe('Suite de teste Dresses', function () 
{

    before(function() {
        cy.fixture('writingData').then(function(data)
        {
            this.data=data
        })        
    })

    it('Suite de teste Dresses', function () {

        const page = new PageDresses()

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

    page.getDresses()
        .should('have.text', 'Dresses')
        .click()

    page.getDresses2()
        .should('be.visible')
        .contains('Summer Dresses')
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

    page.getDresses3()
        .should('have.text', 'Dresses')
        .click()

    page.getDresses4()
        .should('be.visible')
        .contains('Summer Dresses')
        .click()

    page.getM3()
        .should('have.text', 'M (3)')           
        .click()

    page.getYellow()
        .should('have.text', 'Yellow (3)')           
        .click()
        
    page.getColor()
        .focus()                
        .should('have.attr', 'style', 'background: #F1C40F;')

    page.getDress5()
        .children('.ajax_block_product')
        .should('have.length', 3)
        .contains('li', 'Printed Summer Dress')

    page.getChiffon()
        .children('.ajax_block_product')
        .eq(2)
        .should('contain', 'Printed Chiffon Dress')

    page.getMore()
        .should('contain', 'More')
        .click()

    page.getWrite()
    .should('have.text', 'Be the first to write your review !')
        .click()

    page.getWrite2()
        .should('have.text', 'Write a review')
    
    page.getText5()
        .click()

    page.getTittle()
        .should('include.text', 'Title: ')

    page.getProduct()
        .type('Excellent product!')

    page.getComment()
        .should('include.text', 'Comment: ')

    page.getLiked()
        .type('My wife really liked the dress. Fair price.')

    page.getSend()
        .should('have.text', 'Send')
        .click()

    page.getComment2()
        .should('include.text', 'Your comment has been added and will be available ')

    page.getClick()
        .click()

    page.getChiffon2()
        .should('have.text', 'Printed Chiffon Dress')

    page.getPrice1()
        .should('have.text', '$16.40')

    page.getPercent()
        .should('have.text', '-20%')

    page.getDblclick()
        .dblclick()

    page.getValue3()
        .should('have.value', '3')

    page.getValue03()
        .select('3')

    page.getYellow2()
        .click()

    page.getAdd()
        .should('have.text', 'Add to cart')
        .click()

    page.getAdded()
        .should('include.text', 'Product successfully added to your shopping cart')    

    page.getChiffon3()
        .should('have.text', 'Printed Chiffon Dress')

    page.getYellow3()
        .should('have.text', 'Yellow, L')

    page.getText3()
        .should('have.text', '3')

    page.getPrice49()
        .should('have.text', '$49.20')

    page.getItems3()
        .should('include.text', 'There are 3 items in your cart.')
  
    page.getValue49()
        .should('have.text', '$49.20')

    page.getValue2()
        .should('have.text', '$2.00')

    page.getValue51()
        .should('have.text', '$51.20')

    page.getContinue()
        .should('include.text', 'Continue shopping')
        .click()   

    })
})