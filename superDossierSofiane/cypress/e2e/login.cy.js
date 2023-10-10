describe('SignIn test', ()=>{
    Context('SignIn', ()=>{
        BeforeEach(()=>{
            cy.visit('http://localhost:3000/signin');
        })

        it('should have link to go /signup inside the form', ()=>{
            cy.get('div.card').find('h1').contains('Connexion');
            cy.get('form').find('a[href="/signup"]').contains('Pas encore de compte ?').click();
            setTimeout(()=>{
                cy.url().should('eq', 'http://localhost:3000/signup')
            }, 400);
        })

        it('should input userName is correcly filled', ()=>{
            cy.get('input[name="userName"]').type('123admin')
            cy.get('div')
                .contains('Entre 4 et 24 caractères.')
                .contains('Doit commencer par une lettre.')
                .contains('Doit comporter au moins une lettre et aucun caractère spécial.')
                .should('exist')
            cy.get('input[name="password"]').type('Admin12!')
            cy.get('input[name="userName"].is-invalid').should('exist')
            cy.get('input[name="submit"]').should('ahve.attr', 'disabled')
        })
        it('should input password is correcly filled', ()=>{
            cy.get('input[name="password"]').type('Admn12!')
            cy.get('div')
            .contains('Doit avoir une majuscule, une minuscule, un chiffre et un caractère spécial')
            .should('exist')
            cy.get('input[name="userName"]').type('admin')
            cy.get('input[name="password"].is-invalid').should('exist')
            cy.get('input[name="submit"]').should('ahve.attr', 'disabled')
        })
        it('should input submit is correcly filled', ()=>{
            cy.get('input[name="userName').type('admin')
            cy.get('input[name="password]').type('Admin12!')
            cy.get('button[type="submit"]').eq(0).click()
            cy.url().should('eq', 'http://localhost:3000/account')
        })
    })
})