/// <reference types = "Cypress" />
const dayjs = require('dayjs')

import browseProjectObjects from '../../support/pageObjects/SPC/browseProjects';

const project = new browseProjectObjects()

describe('Browse projects and project details', () => {

    beforeEach(() => {
        // cy.clearLocalStorage().clearCookies()
        cy.visit('/')
        cy.wait(3000)
    })

    it('Verify view projects in Campaigns', () => {

        const projectList = [
            "Community Action for Fresh Water",
            "Prioritizing Mental Health",
            "Rotary Responds to the Crisis in the Ukraine",
            "Empowering Girls"
        ];

        project.campaignHeading().should('contain.text', 'Campaigns')
        project.projectList().should('have.length', '4')
        project.projectTitleList().each((item, index, list) => {
            expect(list).to.have.length(4);
            cy.wrap(item).should('contain.text', projectList[index])
        })
        project.projectTitleList().each((item) => {
            if(item.text() === projectList[2]) {
                project.freshWaterViewProject().click()
            }
        })
        cy.url().should('contain', '/projects')
        project.searchKeyword().should('have.attr', 'value').and('eq', 'FreshWaterProject')
        cy.wait(15000)
        project.snapshotsList().find('.snapshot-card').should('have.length', '10')
        // cy.get('select').select('6')
        // cy.get('[data-testid="pagination-prev-btn"]').then(($btn) => {
        //     if ($btn.is(":disabled")) {
        //         cy.log('Button is not available')
        //       return
        //     } else {
        //       cy.wrap($btn).click()
        //     }
        // })

        cy.get('[data-testid="pagination-prev-btn"]').then($button => {
            if ($button.is(':visible')) {
                cy.wrap($button).click()
            }
            else {
                cy.get('[data-testid="pagination-next-btn"]').click()
            }
        })

    })

    it('Verify view projects in Causes', () => {
        const causeProjectList = [
            "Peacebuilding and Conflict Prevention",
            "Disease Prevention and Treatment",
            "Water, Sanitation, and Hygiene",
            "Maternal and Child Health",
            "Basic Education and Literacy",
            "Community Economic Development",
            "Environment"
        ]
        project.campaignHeading().should('contain.text', 'Projects by Cause')
        project.causeProjectTitleList().each((item, index, list) => {
            expect(list).to.have.length(7);
            cy.wrap(item).should('contain.text', causeProjectList[index])
        })
        project.causeProjectTitleList().each((item) => {
            if(item.text() === causeProjectList[5]) {
                cy.get('[aria-label="Community Economic Development"]').click()
            }
        })
        cy.url().should('contain', '/projects')
        // cy.get('.areaofFocusSection.rwc-form-checkbox div.OptionsBox label').contains('Community Economic Development')
        project.causeProjectCheckbox().should('have.attr', 'aria-checked').and('contain', 'true')
        
    })

    // it('Verify Project Status and verify project timeline', () => {
    //     cy.get('button.rwc-header-menu__item a[href="/projects"]').click()
    //     cy.url().should('contain', '/projects')
    //     cy.contains('Club').should('be.visible').then(($element) => {
    //         cy.wrap($element).dblclick({force: true});
    //     });
    //     cy.wait(3000)
    //     // cy.get('.rwc-accordion div:nth-child(2) button.accordion-toggle').click({force:true}).click()                                
    //     // cy.get('.rwc-accordion div:nth-child(2) div div.accordion-body').should('be.visible')
    //     // cy.get('label[data-testid="label-PrjStatusCheckmarks-sts_in_progres"]').click()
    //     // cy.get(':nth-child(2) > .accordion-header > .accordion-toggle').click({force: true})
    //     // cy.get(':nth-child(2) > .rwc-form-checkbox > .rwc-form-element > .checkbox-content').click()
    //     cy.contains('Project Status').should('satisfy', Cypress.dom.isVisible, {setTimeout:3000})
    //                           .click({force: true})  
    //     // cy.get('label[data-testid="label-PrjStatusCheckmarks-sts_in_progres"]').parent()
    //     //                                                                        .should('have.css', 'visibility')
    //     //                                                                        .and('eq', 'collapse')
    //     //                                                                        .click({force: true})

    //     cy.get('.snapshot-card').find('.rwc-badge.rwc-badge--blue-light').then((ele) => {
    //         if(ele.text() === 'In Progress') {
    //             cy.wrap(ele).first().click()
    //         }
    //     })


    // })

    it('Verify Project Status and verify project timeline', () => {
        cy.get('button.rwc-header-menu__item a[href="/projects"]').click()
        cy.url().should('contain', '/projects')
        cy.window().then((win) => {
            cy.stub(win, "open").callsFake((url, target) => {
                return win.open.wrappedMethod.call(win, url, "_self");
            })
        });
        cy.wait(5000)
        cy.get('[id="projectSnapshotDiv-73575978-3503-4D83-8D20-9A34AE110FD4"]').click();
        cy.wait(7000)
        // cy.get('.badges.mt-24.mt-16-tablet span:nth-child(1) div').should('have.text', 'In Progress')
        cy.get(':nth-child(1) > .rwc-badge').then((status) => {

            cy.get('.projectDescriptionWrapper div:nth-child(17)').then((elements) => {
                const list = elements.text()
                cy.log(list)

                if(status == 'In Progress')
                    {
                        cy.get('.mt-8.cust-font1').should('contain', '—')
                    }
                    else if(status == 'Completed')
                    {
                        cy.get('.mt-8.cust-font1').should('contain', list)
                    }

                    cy.get('.scbc').should('satisfy', isAsc)
               
            })

            
            
    
        })
        

        
    })

    // it.only('validate text of elements', () => {
    //     cy.get('button.rwc-header-menu__item a[href="/projects"]').click()
    //     cy.url().should('contain', '/projects')
    //     cy.wait(5000)
    //     cy.get('h5.rwc-card__title').then((elements) => {
    //         const product = elements.text()

    //         cy.log(product)
    //     })
    //     cy.on('uncaught:exception', () => false)
    //     cy.window().then((win) => {
    //         cy.stub(win, "open").callsFake((url, target) => {
    //             return win.open.wrappedMethod.call(win, url, "_self");
    //         })
    //     });
    //     cy.wait(5000)
    //     cy.get('[id="projectSnapshotDiv-3FDD9FCC-C7D2-4D12-909E-FB8A770E4A50"]').click();
    //     cy.wait(5000)
    //     const date = cy.get('button.rwc-button.variant-elevated').text()
    //     cy.log(date)
    // })

    it.only('Verify Proposed table column is ascending', () => {
        cy.getProjectProfile('#projectSnapshotDiv-18A812A6-33DC-4A6D-9C6E-E59623F65C99')
        let Arr1 = new Array() 
        cy.get('.fundingAdditionalProposed table tbody td:nth-child(2)')
        .each(($el) => {Arr1.push($el.text()) }) 
        .then(() => {
            cy.log(Arr1)
        cy.wrap(Arr1).should('equal', Arr1.sort())
        })
    })
})