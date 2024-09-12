
const { defineConfig } = require('Cypress')
const sqlServer = require('cypress-sql-server');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  chromeWebSecurity: false,

  e2e: {

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.db = {
        "userName": "rsa",
        "password": "Boon@123",
        "server": "rsa77.database.windows.net",
        "options": {
            "database": "SuprajaDB",
            "encrypt": true,
            "rowCollectionOnRequestCompletion" : true
        }
      };
      tasks = sqlServer.loadDBPlugin(config.db);
      on('task', tasks);
      return config;
    },
    baseUrl: 'https://spcuat.rotary.org/',
  }
})
