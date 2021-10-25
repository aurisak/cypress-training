describe('sorting items', () => {
    it('sort items by company', () => {
        cy.visit('https://computer-database.gatling.io/computers')
        cy.get('a').contains('Company').click()
        cy.get('a').contains('Company').click()
        cy.get('table')
          .within(() => {
              cy.get('td').contains('Zemmix')
          })
    })
})