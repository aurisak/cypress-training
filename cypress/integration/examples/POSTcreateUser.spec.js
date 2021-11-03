let fakeUser;

describe('Given the user api', () => {
    beforeEach(() => {
        cy.task('newUser').then((user) => {
        fakeUser = user
        })
    })
    context('When I send POST /usuarios', () => {
        it('Then it should create new user', () => {
            cy.request('POST', 'https://serverest.dev/usuarios', fakeUser)
              .should((response) => {
                  expect(response.status).to.eq(201)
                  expect(response.body.message).to.eq('Cadastro realizado com sucesso')
              })
        })
    })
})