import * as api from "../endpoints/endpoints.js"

describe("testes de API",() =>{
    beforeEach('criar usuário', () => {
           api.endpoints.signUp().as('u')
    });
    
   it('verifica status code',() => {
        cy.get('@u').then((response) => {
           cy.log(response.body)
           expect(response.status).to.eql(201)
       })
   });

   it('login de usuário', () => {
        cy.get('@u').then((response) => {
            cy.log(response.body.user.id);
            api.endpoints.login(response.body.user.username).its('status').should('eql',200)
        })
    });

    it('alterar informações de usuário', () => {
        cy.get('@u').then((response) => {
            cy.log(response.body.user.id);
            api.endpoints.login(response.body.user.username);
            api.endpoints.updateUser(response.body.user.id).its('status').should('eql',204)
        })
    });

    it('cobrança de valor', () => {
        cy.get('@u').then((response) => {
            cy.log(response.body.user.id);
            api.endpoints.login(response.body.user.username);
            api.endpoints.chargeMoney(response.body.user.id).its('status').should('eql',200)
        })
    });

    it('verificar transações', () => {
        cy.get('@u').then((response) => {
            cy.log(response.body.user.id);
            api.endpoints.login(response.body.user.username);
            api.endpoints.checkTransactions().its('status').should('eql',200)
        })
    });
})