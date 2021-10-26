describe('dynamic buttons challenge', () => {
    it('challenge 01', () => {
        cy.visit('https://testpages.herokuapp.com/styled/dynamic-buttons-simple.html')
        cy.get('button[id="button00"]').click()
        cy.get('button[id="button01"]').click()
        cy.get('button[id="button02"]').click()
        cy.get('button[id="button03"]').click()
        cy.get('p').contains('All Buttons Clicked').click()
    })

    it('challenge 02', () => {
        cy.visit('https://testpages.herokuapp.com/styled/dynamic-buttons-disabled.html')
        cy.wait(1000)
        cy.get('button').contains('start').click({force: true})
        cy.get('button').contains('One').click()
        cy.wait(1000)
        cy.get('button').contains('Two').click()
        cy.wait(2000)
        cy.get('button').contains('Three').click()
        cy.get('#buttonmessage').contains('All Buttons Clicked').click()
    })
})