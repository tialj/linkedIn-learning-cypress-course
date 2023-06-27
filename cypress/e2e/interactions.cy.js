//alert(Cypress.env('MY_ENV_VARIABLE'));
describe('Basic page interactions', () =>{
    beforeEach(() => {
        cy.visit('/example-4');

    });

    it(`Sets the header text to the item's name when double clicked`, ()=> {

        cy.get('[data-cy=box-1-items-list] > :nth-child(2)')
            .dblclick();

        cy.get('[data-cy=box-1-selected-name]')
            .invoke('text')
            .should('eq', 'Option Two');
        

    });

    it('Displays the correct number of selected checkboxes when a single box is checked', () =>{

        cy.get('[data-cy=box-2-checkboxes] > :nth-child(1) input')
            .check();
        
        cy.get('[data-cy=box-2-selected-count]')
            .invoke('text')
            .should('eq', '1')

    });


    it('Displays the correct number of selected checkboxes when multiple boxes are checked', () =>{

        cy.get('[data-cy=box-2-checkboxes] > :nth-child(1) input')
            .check();

        cy.get('[data-cy=box-2-checkboxes] > :nth-child(2) input')
            .check();
        
        cy.get('[data-cy=box-2-checkboxes] > :nth-child(3) input')
            .check();
        
        cy.get('[data-cy=box-2-selected-count]')
            .invoke('text')
            .should('eq', '3')

    });

    it('Displays the name of the currently selected item', ()=> {
        cy.get('[data-cy=box-3-dropdown]')
            .select('Option Three')

        cy.get('[data-cy=box-3-selected-name]')
            .invoke('text')
            .should('eq', 'Option Three')



    });

    it('Should display the name of the most recently hovered item', () => {

        cy.get('[data-cy=box-4-items-list] > :nth-child(2)')
            .trigger('mouseover')

        cy.get('[data-cy=box-4-selected-name]')
            .invoke('text')
            .should('eq', 'Option Two')

    });


});