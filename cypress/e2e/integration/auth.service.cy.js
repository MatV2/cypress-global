import { authService } from '../../support/services/authService'

describe('Authentication Service Tests', () => {
  it('should login successfully', () => {
    authService.login('user@example.com', 'password123')
      .should('contain', 'Bienvenue')
  })
})