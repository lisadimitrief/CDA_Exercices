describe('Register test', ()=>{
    Context('Register', ()=>{
        BeforeEach(()=>{
            cy.visit('http://localhost:3000/signup');
        })

        it('should have link to go /singnin inside the form', ()=>{
            cy.get('div.card').find('h1').contains('Inscription');
            cy.get('form').find('a[href="/signin"]').contains('Déjà un compte ?').click();
            setTimeout(()=>{
                cy.url().should('eq', 'http://localhost:3000/signin')
            }, 400);
        })

        it('should input userName is correcly filled', ()=>{
            cy.get('input[name="userName"]').type('123admin')
            cy.get('div')
                .contains('Entre 4 et 24 caractères.')
                .contains('Doit commencer par une lettre.')
                .contains('Doit comporter au moins une lettre et aucun caractère spécial.')
                .should('exist')
            cy.get('input[name="email"]').type('admin@admin.com')
            cy.get('input[name="tel"]').type('0401020304')
            cy.get('input[name="password"]').type('Admin12!')
            cy.get('input[name="confirmPassword"]').type('Admin12!')
            cy.get('input[name="userName"].is-invalid').should('exist')
            cy.get('input[name="submit"]').should('ahve.attr', 'disabled')
        })
        it('should input email is correcly filled', ()=>{
            cy.get('input[name="email"]').type('123admin')
            cy.get('div')
                .contains('Doit être dans le format email')
                .should('exist')
            cy.get('input[name="userName"]').type('admin')
            cy.get('input[name="tel"]').type('0401020304')
            cy.get('input[name="password"]').type('Admin12!')
            cy.get('input[name="confirmPassword"]').type('Admin12!')
            cy.get('input[name="email"].is-invalid').should('exist')
            cy.get('input[name="submit"]').should('ahve.attr', 'disabled')
        })
        it('should input tel is correcly filled', ()=>{
            cy.get('input[name="tel"]').type('1235a')
            cy.get('div')
                .contains('Doit avoir un format numéro Français')
                .contains('ne doit pas de lettre')
                .should('exist')
            cy.get('input[name="userName"]').type('admin')
            cy.get('input[name="email"]').type('admin@admin.com')
            cy.get('input[name="password"]').type('Admin12!')
            cy.get('input[name="confirmPassword"]').type('Admin12!')
            cy.get('input[name="tel"].is-invalid').should('exist')
            cy.get('input[name="submit"]').should('ahve.attr', 'disabled')
        })
        it('should input password is correcly filled', ()=>{
            cy.get('input[name="password"]').type('Admn12!')
            cy.get('div')
                .contains('Doit avoir une majuscule, une minuscule, un chiffre et un caractère spécial')
                .should('exist')
            cy.get('input[name="userName"]').type('admin')
            cy.get('input[name="email"]').type('admin@admin.com')
            cy.get('input[name="tel"]').type('0401020304')
            cy.get('input[name="confirmPassword"]').type('Admin12!')
            cy.get('input[name="password"].is-invalid').should('exist')
            cy.get('input[name="submit"]').should('ahve.attr', 'disabled')
        })
        it('should input confirmPassword is correcly filled', ()=>{
            cy.get('input[name="confirmPassword"]').type('Admn12!')
            cy.get('div')
                .contains('Doit être identique au mot de passe')
                .should('exist')
            cy.get('input[name="userName"]').type('admin')
            cy.get('input[name="email"]').type('admin@admin.com')
            cy.get('input[name="tel"]').type('0401020304')
            cy.get('input[name="password"]').type('Admin12!')
            cy.get('input[name="confirmPassword"].is-invalid').should('exist')
            cy.get('input[name="submit"]').should('ahve.attr', 'disabled')
        })
        
        it('should input submit is correcly filled', ()=>{
            cy.get('input[name="userName').type('admin')
            cy.get('input[name="email]').type('admin@admin.com')
            cy.get('input[name="tel]').type('0401020304')
            cy.get('input[name="password]').type('Admin12!')
            cy.get('input[name="confirmPassword]').type('Admin12!')
            cy.get('button[type="submit"]').eq(0).click()
            cy.url().should('eq', 'http://localhost:3000/account')
        })
    })
})