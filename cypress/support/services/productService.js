export const productService = {
    search: (term) => {
      cy.get('[data-cy=search-input]').type(term)
      cy.get('[data-cy=search-button]').click()
      return cy.get('[data-cy=search-results]')
    },
    
    addToCart: (productIndex = 0) => {
      cy.get('[data-cy=product-item]').eq(productIndex)
        .find('[data-cy=add-to-cart]').click()
      return cy.get('[data-cy=cart-notification]')
    }
}