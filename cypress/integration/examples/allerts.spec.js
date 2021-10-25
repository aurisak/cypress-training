describe('allerts tests', () => {
    beforeEach(() => {
        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
    })
    it('show allert box', () => {
        const stub = cy.stub()

        cy.on('window:alert', stub)
        cy.get('input[value="Show alert box"]')
          .click()
          .then(() => {
              expect(stub.getCall(0)).to.be.calledWith('I am an alert box!')             
          })        
    })
    it('show confirm box', () => {
        const stub = cy.stub()

        cy.on('window:confirm', stub)
        cy.get('input[value="Show confirm box"]')
          .click()
          .then(() => {
              expect(stub.getCall(0)).to.be.calledWith('I am a confirm alert')
          })
        cy.on('window:confirm', () => false)
        cy.get('#confirmreturn').contains('false')
    })
})