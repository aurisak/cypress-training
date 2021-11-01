describe('Given the Users api', () => {
    context('When I send GET /usuarios', () => {
        it('Then it should return a list of users registered users', () => {
            cy.request('GET', 'https://serverest.dev/usuarios')
              .should((response) => {
                 expect(response.status).to.eq(200)
                 expect(response.body.quantidade).to.eq(response.body.usuarios.length)
                 expect(response.body.usuarios[0].email).to.not.be.null
                 Cypress._.each(response.body.usuarios, (usuario) => {
                     expect(usuario.email).not.to.be.null
                     expect(usuario).to.have.all.keys('nome', 'email', 'password', 'administrador', '_id')
                 })
            })
        })
    })
    context('When I send GET/usuarios passing id query param', () => {   
        it('Then it should return only filtered user', () => {
            cy.request('GET', 'https://serverest.dev/usuarios?_id=0uxuPY0cbmQhpEz1')
              .should((response) => {
                cy.log(JSON.stringify(response.body))
                  expect(response.status).to.eq(200)
                  expect(response.body.quantidade).to.eq(1)
                  expect(response.body.usuarios[0].nome).to.eq("Fulano da Silva")
              })
        })
    })

})