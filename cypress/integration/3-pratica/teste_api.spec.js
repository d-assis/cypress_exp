import * as api from "../endpoints/endpoints.js"

describe("testes de API",() =>{
    before('criar usuário', () => {
           api.endpoints.signUp().as('u')
    });
    
   it('verifica usuário criado',() => {
        
        cy.get('@u').then((response) => {
           cy.log(response.body)
           expect(response.status).to.eql(201)
       })
   });

   it('trololo', () => {
       cy.get('@u').then((response) => {
           cy.log(response.body.user.id)
       })
   })
   
   /*
   it('login com usuário criado',() => {
        cy.get('@u').then((response) => {
            api.endpoints.login(response.body.user.username).its('status').should('eql',200)
        })
   })
   */
})