class headerObjects {

    languageBtn() {
        return cy.get('.rwc-header-utility-nav__items li div.rwc-link-dropdown button[id="language-select-button"]')
    }
    LangListBox() {
        return cy.get('[id="language-select-menu"]')
    }
    commaonClassLanguage() {
        return cy.get('[class="rwc-link-dropdown__panel-item rwc-link-dropdown__panel-item--sm rwc-link-dropdown__panel-item--down"]')
    }
    myRotaryLink() {
        return cy.get('[class="rwc-header-utility-nav__item is-external"]')
    }
    languageSelected() {
        return cy.get('div.rwc-link-dropdown button span')
    }
    signInButton() {
        return cy.get('[class="rwc-header-main-row__button rwc-header-main-row__button--primary rwc-header--mobile-hide"]')
    }
    images() {
        return cy.get('[src="assets/svg/logos/spcLight-lg-en.svg"]')
    }
    ahrefElements() {
        return cy.get('.rwc-header-menu div.container a')
    }
    carouselText() {
        return cy.get('.rwc-hero-standard__content h1')
    }


}

export default headerObjects;