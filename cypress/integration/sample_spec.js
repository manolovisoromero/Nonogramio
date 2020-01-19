describe('test', ()=> {
    it('Visits site', () => {
        cy.visit('http://localhost:3000/')
        cy.wait(1000)

        cy.contains('Login').click()
        cy.wait(1000)
        cy.contains('Wrong credentials').should('be.visible')

        cy.get('#outlined-adornment-username').type('test')
        cy.get('#outlined-adornment-password').type('changed')

        cy.wait(2000)
        cy.contains('Login').click()
    })
})