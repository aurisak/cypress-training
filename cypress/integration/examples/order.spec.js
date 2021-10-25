describe('order test', () => {
    beforeEach(() => {
        cy.visit("https://petstore.octoperf.com/actions/Catalog.action")
        cy.get('#MainImageContent [alt="Cats"]').click({force: true})
        cy.get('#Catalog').should('be.visible')
        cy.get('table').contains('td', 'FL-DSH-01').click()
        cy.get('h2').contains('Manx')
        cy.get('table').contains('td','EST-14').click()
        cy.get('b').contains('Tailless Manx')
        cy.get('.Button').click()
    })

    it('check order summary', () => {
        cy.get('table')
          .within(() => {
              cy.get('td').should('have.length', 10)
              cy.get('input').should('have.value', 1)
              cy.get('td').contains('$58.50')
          })
    })

    it('add item and check the summary', () => {
        cy.get('table')
          .within(() => {
              cy.get('input[name="EST-14"]').clear().type('2')
              cy.get('input').should('have.value', 2)
              cy.get('input[name="updateCartQuantities"]').click()
          })   
        cy.get('table')
              .within(() => {
              cy.get('td[colspan="7"]').contains('Sub Total: $117.00')
          })
    })
})