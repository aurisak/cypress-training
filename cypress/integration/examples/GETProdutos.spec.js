describe('Products api', () => {
    it('GET/Produtos should return a list with all products', () => {
        cy.request('GET', 'https://serverest.dev/produtos')
          .should((response) => {
              cy.log(JSON.stringify(response.body))
              cy.expect(response.status).to.eq(200)
              cy.expect(response.body.quantidade).to.eq(2)
              cy.expect(response.body.produtos.length).to.eq(2)
              cy.expect(response.body.produtos[0]).to.have.all.keys('nome', 'preco', 'descricao', 'quantidade', '_id')
          })
    })
})