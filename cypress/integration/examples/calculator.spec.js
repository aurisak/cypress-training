describe('calculator test', () => {

    beforeEach(() => {
        cy.visit('https://testpages.herokuapp.com/styled/index.html')
        cy.get('#calculatetest').click()
    })
    it('add up calculation', () => {

        cy.get('input[name="number1"]').type('2')
        cy.get('select').contains('plus')
        cy.get('input[name="number2"]').type('3')
        cy.get('input[value="Calculate"]').click()
        cy.get('#answer').contains('5')
    })

    it('times calculation', () => {

        cy.get('input[name="number1"]').type('2')
        cy.get('select').select('times')
        cy.get('input[name="number2"]').type('3')
        cy.get('input[value="Calculate"]').click()
        cy.get('#answer').contains('6')
    })
})