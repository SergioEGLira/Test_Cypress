Cypress.Commands.add('selectProductByPrice', (productPrice) => {

    cy.get('.homefeatured').find('.ajax_block_product').each(($el, index, $list) => {

        const text = $el.find('.price').text()
        if (text.includes(productPrice)) {
            cy.wrap($el).find('a:contains("Add to cart")').click({ force: true })
        }
    })
})


Cypress.Commands.add('selectProductByPrice2', (productPrice2) => {

    cy.get('.homefeatured').find('.ajax_block_product').each(($el, index, $list) => {

        const text = $el.find('.price').text()
        if (text.includes(productPrice2)) {
            cy.wrap($el).find('a:contains("More")').click()
        }
    })
})


Cypress.Commands.add('selectProductByPrice3', (productPrice3) => {

    cy.get('.product_list').find('.ajax_block_product').each(($el, index, $list) => {

        const text = $el.find('.price').text()
        if (text.includes(productPrice3)) {
            cy.wrap($el).find('a:contains("More")').click()
        }
    })
})  
