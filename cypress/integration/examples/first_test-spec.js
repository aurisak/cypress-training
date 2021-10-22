describe('My first test', () => {
    it('check the website', () => {
        cy.visit('https://testpages.herokuapp.com/styled/index.html')
        cy.get('#basicpagetest').click()
        cy.contains('h1', 'Basic Web Page Example')
    })
})


