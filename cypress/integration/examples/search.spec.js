describe('search item test', () => {
    it('search recquired item', () => {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
        cy.get('input[name="keyword"]').type('goldfish')
        cy.get('input[value="Search"]').click()
        cy.get('table')
          .within(() => {
              cy.get('td').contains('Goldfish')
              cy.get('a').contains('Fresh Water fish from China').click()
          })
        cy.get('h2').contains('Goldfish')
    })
})