class PageBestSellersCheckout {
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

    getBest() {
        return cy.xpath("//a[contains(text(),'Best Sellers')]")
    }

    getLength() {
        return cy.xpath("//ul[@id='homefeatured']")
    }

    getEq5() {
        return cy.xpath("//ul[@id='homefeatured']")
    }

    getProceed() {
        return cy.xpath("//div[2]/div[4]/a[1]/span[1]")
    }

    getClick() {
        return cy.xpath("//td[1]/a[1]/img[1]")
    }
    getOut() {
        return cy.xpath("//div[1]/p[2]/a[1]/span[1]")
    }

    getDress() {
        return cy.xpath("//td[2]/p[1]/a[1]")
    }

    getBeige() {
        return cy.xpath("//td[2]/small[2]/a[1]")
    }

    getInStock() {
        return cy.xpath("//span[contains(text(),'In stock')]")
    }

    getPrice50() {
        return cy.xpath("//td[4]/span[1]/span[1]")
    }

    getDblclick() {
        return cy.xpath("//td[5]/div[1]/a[2]/span[1]/i[1]")
    }

    getValue3() {
        return cy.xpath("//td[5]/input[2]")
    }

    getPrice152() {
        return cy.xpath("//span[@id='total_product_price_4_16_671948']")
    }

    getText152() {
        return cy.xpath("//td[@id='total_product']")
    }

    getValue2() {
        return cy.xpath("//td[@id='total_shipping']")
    }

    getPrice154() {
        return cy.xpath("//td[@id='total_price_without_tax']")
    }

    getText00() {
        return cy.xpath("//td[@id='total_tax']")
    }

    getProceed2() {
        return cy.xpath("//div[3]/div[1]/p[2]/a[1]/span[1]")
    }

    getKindly() {
        return cy.xpath("//form[1]/div[1]/div[3]/textarea[1]")
    }

    getProceed3() {
        return cy.xpath("//form[1]/p[1]/button[1]/span[1]")
    }

    getAgree() {
        return cy.xpath("//label[contains(text(),'I agree to the terms of service and will adhere to')]")
    }

    getChecked() {
        return cy.xpath("//input[@id='cgv']")
    }

    getProceed4() {
        return cy.xpath("//form[1]/p[1]/button[1]/span[1]")
    }

    getPay() {
        return cy.xpath("//div[1]/div[1]/div[3]/div[1]/div[1]/p[1]/a[1]")
    }

    getOrder() {
        return cy.xpath("//p[1]/button[1]/span[1]")
    }

    getValue154() {
        return cy.get('.center_column')
    }

}

export default PageBestSellersCheckout