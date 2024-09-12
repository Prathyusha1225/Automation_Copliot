/// <reference types = "Cypress" />
import 'cypress-iframe'



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
    // value.resultFound().should('contain', '(1) Record Found')
  })  


  // it('should load iframe', () => {
  //       cy.visit('https://myuat.rotary.org/en/donate')
  //       cy.wait(5000)
  //       cy.get('#guestContinue').click()
  //       cy.wait(5000)
  //       cy.get('div[class="Select-control"] span[id="react-select-2--value"]').click()
  //       cy.wait(5000)
  //       cy.get('[id="react-select-2--option-72"]').click()
  //       cy.wait(5000)

  //       cy.on('uncaught:exception', (err, runnable) => {
  //           if(err.message.includes('cross-origin')) {
  //           return false
  //           }
  //           return true
  //       })
        
  //       cy.frameLoaded('div[class="lema-cc-iframe-container"] iframe').then((iframe) => {
  //               const body = iframe.contents().find('body')
  //               cy.wrap(body)
  //       })
        
  //       cy.frameLoaded('div[class="lema-cc-iframe-container"] iframe').then((iframe) => {
  //           const body = iframe.contents().find('body')
  //           cy.wrap(body)
  //       }).find('#cardno')
  //         .click()
  //         .clear()
  //         .type("4111111111111111")
  //         .wait(2000)
  //       cy.frameLoaded('div[class="lema-cc-iframe-container"] iframe').then((iframe) => {
  //               const body = iframe.contents().find('body')
  //               cy.wrap(body)
  //       }).find('#expm')
  //         .click()
  //         .clear()
  //         .type("12")
  //         .wait(2000)
  //       cy.frameLoaded('div[class="lema-cc-iframe-container"] iframe').then((iframe) => {
  //               const body = iframe.contents().find('body')
  //               cy.wrap(body)
  //       }).find('#expy')
  //         .click()
  //         .clear()
  //         .type("29")
  //         .wait(2000)
  //       cy.frameLoaded('div[class="lema-cc-iframe-container"] iframe').then((iframe) => {
  //               const body = iframe.contents().find('body')
  //               cy.wrap(body)
  //       }).find('#cvv')
  //         .click()
  //         .clear()
  //         .type('234')
  //         .wait(2000)
  //       cy.get('#submit-btn').click()

  // })
      

})

