export const authService = {
    login: (email, password) => {
      cy.visit('/login')
      cy.get('[data-cy=username]').type(email)
      cy.get('[data-cy=password]').type(password)
      cy.get('[data-cy=login-button]').click()
      cy.url().should('include', '/dashboard')
      return cy.get('[data-cy=welcome-message]')
    }
}