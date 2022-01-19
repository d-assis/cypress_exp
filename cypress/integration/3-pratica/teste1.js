describe('primeiros testes',()=>{
    beforeEach(()=>{
        //visitar home do sistema
        cy.visit('http://automationpractice.com/index.php');
    });

    it('visitar página',()=>{        
        // verificar existência de elemento único da página
        // "cy.get('.logo').should('exist')" é uma expressão redundante, uma vez que alguns comandos de api do cypress já possuem asserts embutidos, como é o caso de cy.get()
        // Sendo assim, caso o alvo de cy.get() não exista na interface, o teste falhará
        cy.get('.logo')
    });

    it('navegar para T-shirts',()=>{
        //clicar no botão de redirect
        cy.get('.sf-menu > :nth-child(3) > a').click();
        //verificar url
        cy.url().should('equal','http://automationpractice.com/index.php?id_category=5&controller=category')

        cy.get()
    })
    
})