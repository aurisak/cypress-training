describe('update computer', () => {
    it('user is able to update computer', () => {
        cy.visit('https://computer-database.gatling.io/computers')
        cy.get('table.computers.zebra-striped')
          .within(() => {
            cy.get('a').contains('AN/FSQ-7').click()
        })
        cy.get('select').select('Canon').should('have.value', '15')
        cy.get('input[value="Save this computer"]').click()
        cy.get('.alert-message.warning').contains('Computer AN/FSQ-7 has been updated')
    })
})