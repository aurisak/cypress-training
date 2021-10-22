describe('menu tests', () => {

    beforeEach(() => {
        cy.visit("https://petstore.octoperf.com/actions/Catalog.action")
    })

    it('upper menu tag redirect to dashboard page', () => {       
        cy.get('#QuickLinks a').first().click()
        cy.contains('h2', 'Fish')
    })

    it('left menu tag redisrect to dashboard page', () => {
        cy.get('#QuickLinks a').last().click()
        cy.contains('h2', 'Birds')
        cy.get('#BackLink').click()
        cy.get('#SidebarContent').should('be.visible')
    })
})