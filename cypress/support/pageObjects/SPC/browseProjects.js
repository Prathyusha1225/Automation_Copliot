class browseProjectObjects {

    campaignHeading() {
        return cy.get('[class="rwc-rich-text"]')
    }
    projectList() {
        return cy.get('.campaignsCards.rwc-container.background-style-lblue100-circles-tr div.rwc-col-layout__col.rwc-col-layout__col--span-12-desktop')
    }
    projectTitleList() {
        return cy.get('.campaignsCards.rwc-container.background-style-lblue100-circles-tr h3.rwc-projectCard-card__title')
    }
    searchKeyword() {
        return cy.get('[id="Search_keyword"]')
    }
    freshWaterViewProject() {
        return cy.get('[aria-label="Community Action for Fresh Water"]')
    }
    causeCardList() {
        return cy.get('.container div.card')
    }
    causeProjectTitleList() {
        return cy.get('.rwc-col-layout.projectbyCause h6.rwc-card__title')
    }
    causeProjectCheckbox() {
        return cy.get('[data-testid="label-AreaOfFocusCheckmarks-ecb970bf-b8e0-497a-828a-e0af3fefa28e"]')
    }
    snapshotsList() {
        return cy.get('.snapshot-card-continer')
    }
    paginationList() {
        return cy.get('.pag-select-wrapper')
    }
    projectStatusInProgress() {
        return cy.get('label[data-testid="label-PrjStatusCheckmarks-sts_in_progres"]')
    }
    psDropdown() {
        return cy.get('.rwc-accordion div:nth-child(2) button.accordion-toggle')
    }


}

export default browseProjectObjects;