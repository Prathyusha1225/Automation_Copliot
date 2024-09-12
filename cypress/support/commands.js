

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
Cypress.Commands.add('getIframeElements', () => {
  cy.frameLoaded('div[class="lema-cc-iframe-container"] iframe').then((iframe) => {
    const body = iframe.contents().find('body')
    cy.wrap(body) 
  })
})

Cypress.Commands.add('getFooterElements', (links, domain) => {

  cy.get('[class="rwc-footer__link-container"]').find(links)
                   .invoke('removeAttr', 'target').click()
  cy.url().should('contain', domain)
  cy.go('back')

})

Cypress.Commands.add('getSocialFooterElements', (links, domain) => {

  cy.get('[class="rwc-footer__molecule-link"]').find(links)
                   .invoke('removeAttr', 'target').click()
  cy.url().should('contain', domain)
  cy.wait(2000)
  cy.go('back')

})

Cypress.Commands.add('getProjectProfile', (projectID) => {
  cy.get('button.rwc-header-menu__item a[href="/projects"]').click()
        cy.url().should('contain', '/projects')
        cy.window().then((win) => {
            cy.stub(win, "open").callsFake((url, target) => {
                return win.open.wrappedMethod.call(win, url, "_self");
            })
        });
  cy.wait(5000)
  cy.get(projectID).click();
  cy.wait(7000)


})