const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      })
      
      // Configuration pour générer un rapport JSON
      on('after:run', (results) => {
        if (results) {
          require('fs').mkdirSync('cypress', { recursive: true })
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