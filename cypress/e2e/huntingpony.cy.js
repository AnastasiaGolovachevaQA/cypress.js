describe('Оформление заказа', function () {
    
    it('Заказ на HuntingPony', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="0"] > .header__collections-controls > .header__collections-link').click();
        cy.get('[data-product-id="338932820"] > .product-preview__content > .product-preview__area-title > .product-preview__title > a').click();
        cy.get('.add-cart-counter__btn').wait(1000).click(); 
        cy.get('[data-add-cart-counter-plus=""]').wait(1000).click();
        cy.get('.header__cart').click();
        cy.get('.cart-controls > .button').wait(1000).click();
        cy.contains('Оформление заказа');
    })

})
