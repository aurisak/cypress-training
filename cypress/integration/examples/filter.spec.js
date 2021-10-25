describe('filter items', () => {
    it('filter by name', () => {
        cy.visit('https://computer-database.gatling.io/computers')
        cy.get('input[type="search"]').type('famicom')
        cy.get('#searchsubmit').click()
        cy.get('a').contains('Famicom')
    })
})