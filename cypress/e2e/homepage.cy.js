// cypress/e2e/homepage.cy.js

describe('Page d\'accueil SportShop', () => {
    beforeEach(() => {
      // Visite la page d'accueil avant chaque test
      cy.visit('/')
      // Prise de capture d'écran initiale
      cy.screenshot('page-accueil')
    })
  
    it('devrait afficher le header avec la navigation', () => {
      // Vérifie que le logo est présent
      cy.get('nav .logo').should('be.visible').and('contain', 'SportShop')
      
      // Vérifie que les liens de navigation sont présents
      cy.get('.nav-links a').should('have.length', 4)
      cy.get('.nav-links a').eq(0).should('contain', 'Accueil').and('have.attr', 'href', '#accueil')
      cy.get('.nav-links a').eq(1).should('contain', 'Catégories').and('have.attr', 'href', '#categories')
      cy.get('.nav-links a').eq(2).should('contain', 'Promotions').and('have.attr', 'href', '#promos')
      cy.get('.nav-links a').eq(3).should('contain', 'Contact').and('have.attr', 'href', '#contact')
      
      // Capture d'écran du header
      cy.get('header').screenshot('header-navigation')
    })
  
    it('devrait afficher la section hero avec un titre et un CTA', () => {
      // Vérifie le titre principal
      cy.get('.hero-content h1')
        .should('be.visible')
        .and('contain', 'Équipez-vous pour la performance')
      
      // Vérifie la présence du bouton CTA
      cy.get('.hero-content .cta-button')
        .should('be.visible')
        .and('contain', 'Voir nos produits')
      
      // Capture d'écran de la section hero
      cy.get('.hero').screenshot('hero-section')
    })
  
    it('devrait afficher les catégories de produits', () => {
      // Vérifie le titre de la section
      cy.get('.categories h2')
        .should('be.visible')
        .and('contain', 'Nos Catégories')
      
      // Vérifie qu'il y a 3 cartes de catégories
      cy.get('.category-card').should('have.length', 3)
      
      // Vérifie le contenu de chaque carte
      cy.get('.category-card').eq(0).within(() => {
        cy.get('h3').should('contain', 'Running')
        cy.get('p').should('contain', 'Équipements et vêtements de course')
        cy.get('img').should('have.attr', 'alt', 'Running')
      })

      cy.get('.category-card').eq(1).within(() => {
        cy.get('h3').should('contain', 'Fitness')
        cy.get('p').should('contain', 'Matériel de musculation et accessoires')
        cy.get('img').should('have.attr', 'alt', 'Fitness')
      })

      cy.get('.category-card').eq(2).within(() => {
        cy.get('h3').should('contain', 'Sports Collectifs')
        cy.get('p').should('contain', 'Équipements pour tous les sports d\'équipe')
        cy.get('img').should('have.attr', 'alt', 'Sports collectifs')
      })
      
      // Capture d'écran de la section catégories
      cy.get('.categories').screenshot('categories-section')
    })
  
    it('devrait afficher le footer', () => {
      // Vérifie que le footer contient le copyright
      cy.get('footer p')
        .should('be.visible')
        .and('contain', '2024 SportShop - Tous droits réservés')
      
      // Capture d'écran du footer
      cy.get('footer').screenshot('footer-section')
    })
  
    it('devrait naviguer vers les sections en cliquant sur les liens', () => {
      // Teste les ancres de navigation
      cy.get('.nav-links a').eq(1).click() // Clic sur "Catégories"
      cy.screenshot('navigation-categories')
      
      cy.get('.nav-links a').eq(0).click() // Clic sur "Accueil"
      cy.screenshot('navigation-accueil')
    })
  })