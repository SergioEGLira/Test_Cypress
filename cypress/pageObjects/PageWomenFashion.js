class PageWomenFashion {

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

    getWomen() {
        return cy.xpath("//div[6]/ul[1]/li[1]/a[1]")
    }

    getTops() {
        return cy.xpath("//div[1]/div[1]/div[1]/ul[1]/li[1]/a[1]")
    }

    getTShirts() {
        return cy.xpath("//div[1]/ul[1]/li[1]/label[1]/a[1]")
    }

    getSizeL() {
        return cy.xpath("//div[1]/div[3]/ul[1]/li[3]/label[1]/a[1]")
    }

    getOrange() {
        return cy.xpath("//div[4]/ul[1]/li[1]/label[1]/a[1]")
    }

    getMousemove() {
        return cy.get('.ui-slider-range')
    }

    getMore() {
        return cy.xpath("//span[contains(text(),'More')]")
    }

    getFaded() {
        return cy.xpath("//h1[contains(text(),'Faded Short Sleeve T-shirts')]")
    }

    getValue() {
        return cy.xpath("//span[@id='our_price_display']")
    }

    getOneClick() {
        return cy.xpath("//div[2]/p[1]/a[2]/span[1]/i[1]")
    }

    getValue2() {
        return cy.xpath("//input[@id='quantity_wanted']")
    }

    getSizeM() {
        return cy.xpath("//select[@id='group_1']")
    }

    getColor14() {
        return cy.xpath("//a[@id='color_14']")
    }

    getAdd() {
        return cy.xpath("//span[contains(text(),'Add to cart')]")
    }

    getSuccessfully() {
        return cy.xpath("//div[4]/div[1]/div[1]/h2[1]")
    }

    getSleeve() {
        return cy.xpath("//span[@id='layer_cart_product_title']")
    }

    getBlueM() {
        return cy.xpath("//span[@id='layer_cart_product_attributes']")
    }

    getQuantity2() {
        return cy.xpath("//span[@id='layer_cart_product_quantity']")
    }

    getPrice() {
        return cy.xpath("//span[@id='layer_cart_product_price']")
    }

    getItems2() {
        return cy.xpath("//div[1]/div[2]/h2[1]/span[1]")
    }

    getValue3() {
        return cy.xpath("//div[4]/div[1]/div[2]/div[1]/span[1]")
    }

    getText2() {
        return cy.xpath("//div[4]/div[1]/div[2]/div[2]/span[1]")
    }

    getText35() {
        return cy.xpath("//div[4]/div[1]/div[2]/div[3]/span[1]")
    }

    getShopping() {
        return cy.xpath("//div[2]/div[4]/span[1]/span[1]")
    }

}

export default PageWomenFashion;