class PagePopularFashion {
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

    getHome() {
        return cy.xpath("//div[3]/div[1]/ul[1]/li[1]/a[1]/span[1]")
    }

    getPopular() {
        return cy.xpath("//a[contains(text(),'Popular')]")
    }

    getBlouse() {
        return cy.xpath("//ul[@id='homefeatured']")
    }

    getPrice50() {
        return cy.xpath("//ul[@id='homefeatured']")
    }

    getClick1() {
        return cy.xpath("//img[@id='thumb_16']")
    }

    getClick2() {
        return cy.get("a[title='Close']")
    }

    getImg17() {
        return cy.xpath("//img[@id='thumb_17']")
    }

    getClose() {
        return cy.get("a[title='Close']")
    }

    getImg18() {
        return cy.xpath("//img[@id='thumb_18']")
    }

    getScroll() {
        return cy.xpath("//a[@id='view_scroll_right']")
    }

    getImg19() {
        return cy.xpath("//img[@id='thumb_19']")
    }

    getFirst() {
        return cy.xpath("//span[contains(text(),'Be the first to write your review !')]")
    }

    getReview() {
        return cy.xpath("//div[1]/form[1]/div[1]/div[2]/h2[1]")
    }

    getText5() {
        return cy.xpath("//a[contains(text(),'5')]")
    }

    getTitle() {
        return cy.xpath("//div[1]/div[2]/label[1]")
    }

    getExcellent() {
        return cy.xpath("//input[@id='comment_title']")
    }

    getComment() {
        return cy.xpath("//div[1]/div[2]/label[2]")
    }
    getWife() {
        return cy.xpath("//textarea[@id='content']")
    }

    getSend() {
        return cy.xpath("//div[2]/p[2]/button[1]/span[1]")
    }

    getAdded() {
        return cy.xpath("//p[contains(text(),'Your comment has been added and will be available ')]")
    }

    getOk() {
        return cy.xpath("//span[contains(text(),'OK')]")
    }

    getSummer() {
        return cy.xpath("//h1[contains(text(),'Printed Summer Dress')]")
    }

    getPrice30() {
        return cy.xpath("//span[@id='our_price_display']")
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

    getYellow() {
        return cy.xpath("//a[@id='color_16']")
    }

    getCart() {
        return cy.xpath("//span[contains(text(),'Add to cart')]")
    }

    getCart2() {
        return cy.xpath("//div[4]/div[1]/div[1]/h2[1]")
    }
    getSummer2() {
        return cy.xpath("//span[@id='layer_cart_product_title']")
    }

    getYellowL() {
        return cy.xpath("//span[@id='layer_cart_product_attributes']")
    }

    getText3() {
        return cy.xpath("//span[@id='layer_cart_product_quantity']")
    }

    getValue91() {
        return cy.xpath("//span[@id='layer_cart_product_price']")
    }

    getCart3() {
        return cy.xpath("//div[1]/div[2]/h2[1]/span[1]")
    }

    getValue9150() {
        return cy.xpath("//div[4]/div[1]/div[2]/div[1]/span[1]")
    }

    getValue2() {
        return cy.xpath("//div[4]/div[1]/div[2]/div[2]/span[1]")
    }

    getValue93() {
        return cy.xpath("//div[4]/div[1]/div[2]/div[3]/span[1]")
    }

    getContinue() {
        return cy.xpath("//div[2]/div[4]/span[1]/span[1]")
    }

}

export default PagePopularFashion