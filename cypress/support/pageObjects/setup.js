class locators {


    userName() {
        return cy.get('[name="username"]')
    }
    password() {
        return cy.get('[name="password"]')
    }
    loginBtn() {
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]')
    }
    admin() {
        return cy.get('[href="/web/index.php/admin/viewAdminModule"]')
    }
    searchUserName() {
        return cy.get('div .oxd-form-row div input[class="oxd-input oxd-input--active"]')
    }
    userRole() {
        return cy.get('.oxd-select-text-input').eq(0)
    }
    employeeName() {
        return cy.get('[placeholder="Type for hints..."]')
    }
    status() {
        return cy.get('.oxd-select-text-input').eq(1)
    }
    dropdownList() {
        return cy.get('[class="oxd-select-dropdown --positon-bottom"]')
    }
    dropdownOption() {
        return cy.get('[class="oxd-select-option"]')
    }
    dropOption() {
        return cy.get('[class="oxd-autocomplete-option"]')
    }
    searchBtn() {
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]')
    }
    resultFound() {
        return cy.get('[class="oxd-text oxd-text--span"]')
    }


}


export default locators;