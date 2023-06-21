describe('Max characters in text box', () =>{

    it('Displays correct # of remaining characters', () => {
        cy.visit('http://localhost:3000/example-2')

        cy.get('[data-cy="chars-left-count"]')
            .invoke('text')
            .should('equal', '15');

        cy.get('[data-cy="max-char-input"]').type('hello');

        cy.get('[data-cy="chars-left-count"]')
            .invoke('text')
            .should('equal', '10');
        
        cy.get('[data-cy="max-char-input"]').type(' my friend');
        
        cy.get('[data-cy="chars-left-count"]')
            .invoke('text')
            .should('equal', '0');

    });

    it('Cannot exceed character limit', () => {
        cy.visit('http://localhost:3000/example-2')

        cy.get('[data-cy="max-char-input"]').type('Cannot exceed character limitation');
        
        cy.get('[data-cy="max-char-input"]')
            .should('have.attr', 'value', 'Cannot exceed c');
        

    });
});