describe('Max characters in text box', () =>{
    beforeEach (() =>{

        cy.visit('/example-2');

        //Creating aliases for chars left count and char input field//
        cy.get('[data-cy="chars-left-count"]')
            .as('charsLeftCount');

        cy.get('[data-cy="max-char-input"]')
            .as('maxCharInput');

    });

    it('Displays correct # of remaining characters', () => {
        cy.get('@charsLeftCount')
            .invoke('text')
            .should('equal', '15');

        cy.get('@maxCharInput').type('hello');

        cy.get('@charsLeftCount')
            .invoke('text')
            .should('equal', '10');
        
        cy.get('@maxCharInput').type(' my friend');
        
        cy.get('@charsLeftCount')
            .invoke('text')
            .should('equal', '0');

    });

    it('Cannot exceed character limit', () => {

        cy.get('@maxCharInput').type('Cannot exceed character limitation');
        
        cy.get('@maxCharInput')
            .should('have.attr', 'value', 'Cannot exceed c');
        

    });
});