class PageDresses {
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

    getDresses() {
        return cy.xpath("//div[6]/ul[1]/li[2]/a[1]")
    }

    getDresses2() {
        return cy.xpath("//div[1]/div[1]/ul[1]/li[3]/a[1]")
    }

    getDresses3() {
        return cy.xpath("//div[6]/ul[1]/li[2]/a[1]")
    }

    getDresses4() {
        return cy.xpath("//div[1]/div[1]/ul[1]/li[3]/a[1]")
    }

    getM3() {
        return cy.xpath("//div[1]/ul[1]/li[2]/label[1]/a[1]")
    }

    getYellow() {
        return cy.xpath("//li[6]/label[1]/a[1]")
    }

    getColor() {
        return cy.xpath("//input[@id='layered_id_attribute_group_16']")
    }

    getDress5() {
        return cy.xpath("//div[1]/div[3]/div[2]/ul[1]")
    }

    getChiffon() {
        return cy.xpath("//div[1]/div[3]/div[2]/ul[1]")
    }

    getMore() {
        return cy.xpath("//li[3]/div[1]/div[2]/div[2]/a[2]/span[1]")
    }

    getWrite() {
        return cy.xpath("//span[contains(text(),'Be the first to write your review !')]")
    }

    getWrite2() {
        return cy.xpath("//div[1]/form[1]/div[1]/div[2]/h2[1]")
    }

    getText5() {
        return cy.xpath("//a[contains(text(),'5')]")
    }

    getTittle() {
        return cy.xpath("//div[1]/div[2]/label[1]")
    }

    getProduct() {
        return cy.xpath("//input[@id='comment_title']")
    }

    getComment() {
        return cy.xpath("//div[1]/div[2]/label[2]")
    }

    getLiked() {
        return cy.xpath("//textarea[@id='content']")
    }

    getSend() {
        return cy.xpath("//div[2]/p[2]/button[1]/span[1]")
    }

    getComment2() {
        return cy.xpath("//p[contains(text(),'Your comment has been added and will be available ')]")
    }

    getClick() {
        return cy.xpath("//span[contains(text(),'OK')]")
    }

    getChiffon2() {
        return cy.xpath("//h1[contains(text(),'Printed Chiffon Dress')]")
    }

    getPrice1() {
        return cy.xpath("//span[@id='our_price_display']")
    }

    getPercent() {
        return cy.xpath("//span[@id='reduction_percent_display']")
    }

    getDblclick() {
        return cy.xpath("//div[1]/div[2]/p[1]/a[2]/span[1]/i[1]")
    }

    getValue3() {
        return cy.xpath("//input[@id='quantity_wanted']")
    }

    getValue03() {
        return cy.xpath("//select[@id='group_1']")
    }

    getYellow2() {
        return cy.xpath("//a[@id='color_16']")
    }

    getAdd() {
        return cy.xpath("//span[contains(text(),'Add to cart')]")
    }

    getAdded() {
        return cy.xpath("//div[4]/div[1]/div[1]/h2[1]")
    }

    getChiffon3() {
        return cy.xpath("//span[@id='layer_cart_product_title']")
    }

    getYellow3() {
        return cy.xpath("//span[@id='layer_cart_product_attributes']")
    }

    getText3() {
        return cy.xpath("//span[@id='layer_cart_product_quantity']")
    }

    getPrice49() {
        return cy.xpath("//span[@id='layer_cart_product_price']")
    }

    getItems3() {
        return cy.xpath("//div[1]/div[2]/h2[1]/span[1]")
    }

    getValue49() {
        return cy.xpath("//div[4]/div[1]/div[2]/div[1]/span[1]")
    }

    getValue2() {
        return cy.xpath("//div[4]/div[1]/div[2]/div[2]/span[1]")
    }

    getValue51() {
        return cy.xpath("//div[4]/div[1]/div[2]/div[3]/span[1]")
    }

    getContinue() {
        return cy.xpath("//div[2]/div[4]/span[1]/span[1]")
    }

}

export default PageDresses