const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        supportFile: false,
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    },

    component: {
        devServer: {
            framework: 'create-react-app',
            bundler: 'webpack',
        },
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    },
})
