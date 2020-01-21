describe('test', ()=> {
    it('Visits site', () => {
        
        cy.visit('http://localhost:3000/')
        cy.wait(1000)

    })
    it("Wrong credentials", ()=> {

        cy.contains('Login').click()
        cy.wait(1000)
        cy.contains('Wrong credentials').should('be.visible')
    })
    it("Succesful login", ()=> {

        cy.wait(2000)
        cy.get('#outlined-adornment-username').type('manolo')
        cy.get('#outlined-adornment-password').type('manolo')
        cy.wait(2000)
        cy.contains('Login').click()
        cy.contains('Nonogram.io~').should('be.visible')
    })
})