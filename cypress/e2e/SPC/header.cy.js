/// <reference types = "Cypress" />

import headerObjects from "../../support/pageObjects/SPC/header"

const header = new headerObjects();

describe('SPC header flow', () => {

    before(() => {
        cy.clearLocalStorage().clearCookies()
        cy.visit('/')
    })

    it('Verify the SPC header components', () => {

        header.myRotaryLink().invoke('removeAttr', 'target').click()
        cy.url().should('eq', 'https://myuat.rotary.org/')
        cy.go('back');

        header.signInButton().should('be.visible')
                             .click()
        cy.url().should('contain', '/login?destination=https://myuat.rotary.org/en/secure/showcase')
        cy.go('back')
        cy.url().should('eq', 'https://spcuat.rotary.org/')
        header.images().should('exist')
                       .click()
        header.ahrefElements().should('have.attr', 'href')
                              .then((href) => {
                                    cy.visit(href);
                              })
        header.carouselText().should('have.text', 'Making a difference')
        header.languageBtn().click()
        header.LangListBox().should('be.visible')
                            .contains('Italiano')
                            .click()
        header.languageSelected().should('contain', 'Italiano')

        
    })
})


