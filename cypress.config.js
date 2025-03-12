const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      })
      
      // Configuration pour générer un rapport JSON
      // test
      on('after:run', (results) => {
        if (results) {
          // Créer un dossier de rapport si nécessaire
          require('fs').mkdirSync('cypress', { recursive: true })
          // Écrire les résultats dans un fichier JSON
          require('fs').writeFileSync(
            'cypress/results.json',
            JSON.stringify({ results }, null, 2)
          )
        }
      })
    },
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  downloadsFolder: 'cypress/downloads',
  fixturesFolder: 'cypress/fixtures',
})