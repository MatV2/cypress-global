import { authService } from '../../support/services/authService'
import { productService } from '../../support/services/productService'
import { checkoutService } from '../../support/services/checkoutService'

describe('Complete Purchase Flow', () => {
  it('should complete the purchase process', () => {
    // Connexion
    authService.login('customer@example.com', 'securepassword')
    
    // Recherche et ajout au panier
    productService.search('smartphone')
    productService.addToCart()
    
    // Paiement
    checkoutService.processPayment({
      number: '4111111111111111',
      expiry: '12/25',
      cvv: '123'
    })
    
    // Vérification finale
    cy.get('[data-cy=order-success]').should('be.visible')
  })
})