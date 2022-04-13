describe('primeiros testes',()=>{
    beforeEach('visitar site',() => {
        cy.visit('signin');
    });

    it('checar página', ()=>{        
        // verificar existência de elemento único da página
        // "cy.get('.logo').should('exist')" é uma expressão redundante, uma vez que alguns comandos de api do cypress já possuem asserts embutidos, como é o caso de cy.get()
        // Sendo assim, caso o alvo de cy.get() não exista na interface, o teste falhará
        cy.get('.makeStyles-logo-3')
        cy.url().then((url) => expect(url).to.include("signin"))
    });

    it('login inválido (credenciais inválidas)',()=>{
       cy.get("#username").type("abcd");
       cy.get("#password").type("1234");
       cy.get('button[data-test="signin-submit"]').click()
       cy.contains("invalid")
    });

    it('login inválido (campos vazios)',()=>{
        cy.get('button[data-test="signin-submit"]').click()
        cy.contains("required")
     });

    it('login inválido (user vazio)',() => {
        cy.get("#password").type("1234");
        cy.contains("required")
        cy.get('button[data-test="signin-submit"]').should("be.disabled")
     });

    it('login inválido (senha vazia)',() => {
        cy.get("#username").type("abcd");
        cy.get('button[data-test="signin-submit"]').should("be.disabled")
     });

    it('login válido',()=>{
        cy.get("#username").type("Giovanna74");
        cy.get("#password").type("$2a$10$5PXHGtcsckWtAprT5/JmluhR13f16BL8SIGhvAKNP.Dhxkt69FfzW");
        cy.get('button[data-test="signin-submit"]').click()
     });
})