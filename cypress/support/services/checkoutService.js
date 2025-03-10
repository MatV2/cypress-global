export const checkoutService = {
    processPayment: (cardDetails) => {
      cy.get('[data-cy=cart-icon]').click()
      cy.get('[data-cy=checkout-button]').click()
      cy.url().should('include', '/checkout')
      
      cy.get('[data-cy=card-number]').type(cardDetails.number)
      cy.get('[data-cy=card-expiry]').type(cardDetails.expiry)
      cy.get('[data-cy=card-cvv]').type(cardDetails.cvv)
      cy.get('[data-cy=place-order]').click()
      
      return cy.url().should('include', '/order-confirmation')
    }
}