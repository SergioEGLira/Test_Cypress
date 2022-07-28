import PagePopularFashion from '../../pageObjects/PagePopularFashion'
describe('Suite de teste Popular Fashion', function () 
{

    before(function() {
        cy.fixture('writingData').then(function(data)
        {
            this.data=data
        })        
    })

    it('Suite de teste Popular Fashion', function () {

        const page = new PagePopularFashion()
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

    page.getPopular()
        .should('have.text', 'Popular')
        .click()

    page.getBlouse()
        .children('.ajax_block_product ')
        .should('have.length', 7)
        .contains('li', 'Blouse')

    page.getPrice50()
        .children('.ajax_block_product')
        .eq(3)
        .should('contain', '$50.99')

    cy.selectProductByPrice2(this.data.priceOfTheProduct2)

    page.getClick1()
        .click()
          
    page.getClick2()
        .click({force: true})

    page.getImg17()
        .click()

    page.getClose()   
        .click({force: true})
        
    page.getImg18()       
        .click()

    page.getClose()         
        .click({force: true})
            
    page.getScroll()        
        .click()

    page.getImg19()    
        .click()

    page.getClose()           
        .click({force: true})

    page.getFirst()
        .should('have.text', 'Be the first to write your review !')
        .click()

    page.getReview()
        .should('have.text', 'Write a review')
    
    page.getText5()
        .click()

    page.getTitle()
        .should('include.text', 'Title: ')

    page.getExcellent()
        .type('Excellent product!')

    page.getComment()
        .should('include.text', 'Comment: ')

    page.getWife()
        .type('My wife really liked the dress. Fair price.')

    page.getSend()
        .should('have.text', 'Send')
        .click()

    page.getAdded()
        .should('include.text', 'Your comment has been added and will be available ')

    page.getOk()
        .click()

    page.getSummer()
        .should('have.text', 'Printed Summer Dress')

    page.getPrice30()
        .should('have.text', '$30.50')
    
    page.getDblclick()
        .dblclick()
   
    page.getValue3()
        .should('have.value', '3')
    
    page.getValue03()
        .select('3')
   
    page.getYellow()
        .click()

    page.getCart()
        .should('have.text', 'Add to cart')
        .click()

    page.getCart2()
    .should('include.text', 'Product successfully added to your shopping cart')    

    page.getSummer2()
        .should('have.text', 'Printed Summer Dress')

    page.getYellowL()
        .should('have.text', 'Yellow, L')

    page.getText3()
        .should('have.text', '3')

    page.getValue91()
        .should('have.text', '$91.50')

    page.getCart3()
        .should('include.text', 'There are 3 items in your cart.')
  
    page.getValue9150()   
        .should('have.text', '$91.50')

    page.getValue2()
        .should('have.text', '$2.00')

    page.getValue93()
        .should('have.text', '$93.50')

    page.getContinue()
        .should('include.text', 'Continue shopping')
        .click()   


    })
})