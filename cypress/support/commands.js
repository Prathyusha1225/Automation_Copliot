// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from '../support/pageObjects/setup';


const value = new loc();

Cypress.Commands.add('userLogin', (email, password) => {
    value.userName().type(email)
    value.password().type(password)
    value.loginBtn().click()
})

Cypress.Commands.add('dropdownSelect', (option) => {
    value.dropdownOption().each((role) => {
        if (role.text() === option)
        {
          cy.wrap(role).click()
        }
      })
})