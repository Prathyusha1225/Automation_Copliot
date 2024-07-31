
const { defineConfig } = require('cypress')
const sqlServer = require('cypress-sql-server');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
  },
    setupNodeEvents(on, config) {
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
  })