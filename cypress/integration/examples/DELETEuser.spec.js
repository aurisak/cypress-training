const { eq } = require("lodash")

describe('Given the user api', () => {
    //context('When I send POST /usuarios', () => {
    //    it('then new user should be cretaed', () => {
    //        cy.request('POST', 'https://serverest.dev/usuarios', { "nome": "Jana Jana", "email": "jana.jana@qa.com","password": "test","administrador": "true"})
    //          .should((response) => {
    //              expect(response.status).to.eq(201)
    //              expect(response.body.message).to.eq('Cadastro realizado com sucesso')
    //          })
    //    })
    //})
    context('When I send DELETE /usuarios', () => {
        it('then user sholud be deleted', () => {
            cy.request('DELETE', 'https://serverest.dev/usuarios/j3oejRO39ms0FgEa')
              .should((response) => {
                  expect(response.status).to.eq(200)
                  expect(response.body.message).to.eq('Nenhum registro excluído')
              })
        })
    })
})