/// <reference types="cypress" />

import loc from '../support/pageObjects/setup';
import data from '../fixtures/data.json';


const value = new loc();

describe('Copilot setup', () => {

  before(() => {
    cy.visit('/')
    cy.userLogin(data.email, data.password)
  })
  
  it('should navigate to admin page', () => {
    value.admin().click()
    value.searchUserName().type(data.username)
    value.userRole().click()
    value.dropdownList().should('be.visible')
    cy.dropdownSelect(data.userRole)
    value.employeeName().type(data.username)
    cy.wait(3000)
    value.dropOption().each((role) => {
      if (role.text() === data.employeeName)
      {
        cy.wrap(role).click()
      }
    })
    value.status().click()
    cy.dropdownSelect(data.status)
    value.searchBtn().click()
    value.resultFound().should('contain', '(1) Record Found')
  })

})

