describe('add computer', () => {
    it('add new computer', () => {
        cy.visit('https://computer-database.gatling.io/computers')
        cy.get('#add').click()
        cy.get('input[name="name"]').type('TEST MAC')
        cy.get('input[name="introduced"]').type('2009-12-12')
        cy.get('select').contains('RCA')
        cy.get('input[value="Create this computer"]').click()
        cy.get('.alert-message.warning').contains('Computer TEST MAC has been created')
    })
})