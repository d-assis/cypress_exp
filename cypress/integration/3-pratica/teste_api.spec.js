import * as api from "../endpoints/endpoints.js"

describe("testes de API",() =>{
    it('ciclo de usuário',()=> {
        api.endpoints.signUp().then((response) => {
            expect(response.status).to.eql(201);
            cy.log(response.body)
            api.endpoints.login(response.body.user.username).its('status').should('eql',200);
            api.endpoints.updateUser(response.body.user.id).its('status').should('eql',204);
            api.endpoints.chargeMoney(response.body.user.id).its('status').should('eql',200);
            api.endpoints.checkTransactions().then((r) => {
                expect(r.status).to.eql(200)
            })
        })
    });
})