/// <reference types = "Cypress" />

import footerObjects from "../../support/pageObjects/SPC/footer"

const footer = new footerObjects()


describe('footer flow', () => {

    beforeEach(() => {
        cy.visit('/')
    })


    it('Verify footer components with domains', () => {

        // footer.footerElements().find('[href="https://myuat.rotary.org/en/contact"]').click()
        cy.get('[class="rwc-footer__molecule-link"]').find('[href="https://myuat.rotary.org/en/contact"]')
                                                     .invoke('removeAttr', 'target').click()
        cy.url().should('contain', '/en/contact')
        cy.go('back')
        footer.footerElements().find('[href="https://myuat.rotary.org/en/donate"]')
                               .invoke('removeAttr', 'target').click()  
        cy.url().should('contain', '/en/donate')
        cy.go('back')

        cy.get('[id="ClubSearch"]').type('Pune')
        cy.get('[class="rwc-form-select__container css-b62m3t-container"]').eq(0).click()
        cy.get('[class="rwc-form-select__menu css-0"]').should('be.visible')
        cy.get('[class="rwc-form-select__option css-0"]').each(($el) => {
            if($el.text() === 'Åland Islands') {

                cy.wrap($el).click()

            }
        })

    })

    it.only('Verify footer elements', () => {
        cy.getFooterElements('[href="https://myuat.rotary.org/en/contact"]', '/en/contact')
        cy.getFooterElements('[href="https://myuat.rotary.org"]', 'https://myuat.rotary.org/')
        cy.getFooterElements('[href="https://myuat.rotary.org/en/donate"]', '/en/donate')
        cy.getFooterElements('[href="http://www.youtube.com/user/RotaryInternational"]', 'https://www.youtube.com/user/RotaryInternational')
        cy.getFooterElements('[href="http://www.facebook.com/rotary"]', 'https://www.facebook.com/rotary')
        cy.getFooterElements('[href="http://www.flickr.com/photos/rotaryinternational/"]', 'https://www.flickr.com/photos/rotaryinternational/')
        // cy.getFooterElements('[href="https://twitter.com/#!/rotary"]', 'https://x.com/')
        cy.getFooterElements('[href="http://www.linkedin.com/company/rotary-international"]', 'https://www.linkedin.com/company/rotary-international')
    })
})
