describe('test', ()=> {
    it('Logs in', () => {
        cy.visit('http://localhost:3000/')
        cy.wait(1000)

    
        cy.get('#outlined-adornment-username').type('manolo')
        cy.get('#outlined-adornment-password').type('manolo')

        cy.wait(2000)
        cy.contains('Login').click()
        cy.wait(2000)
        cy.contains('Nonogram.io~').should('be.visible')

    })

    it('Adds note', () => {

        cy.get('[data-cy=newnoteinput]').type('Cypress test note')

        cy.wait(2000)
        cy.get('[data-cy=newnotebutton]').click()
        cy.wait(2000)
        cy.contains('Cypress test note')

    })

    it('Updates note', () => {

        cy.contains('Cypress test note').click()
        cy.wait(2000)
        cy.get('[data-cy=editinginput]').clear()
        cy.get('[data-cy=editinginput]').type("cypress edited test note")
        cy.get('[data-cy=updatebutton]').click()


        cy.wait(2000)
        cy.contains('cypress edited test note')


    })

    it('Deletes note', () => {

        cy.get('[data-cy=deletebutton]').click()
        cy.wait(2000)
        cy.contains('cypress edited test note').should('not.exist')
    })

    it('Cant add more than five', () => {

        cy.get('[data-cy=newnoteinput]').type('Cypress test note')
        cy.get('[data-cy=newnotebutton]').click()
        cy.get('[data-cy=newnoteinput]').clear()


        cy.get('[data-cy=newnoteinput]').type('Cypress test note')
        cy.get('[data-cy=newnotebutton]').click()
        cy.get('[data-cy=newnoteinput]').clear()


        cy.get('[data-cy=newnoteinput]').type('Cypress test note')
        cy.get('[data-cy=newnotebutton]').click()
        cy.get('[data-cy=newnoteinput]').clear()


        cy.get('[data-cy=newnoteinput]').type('Cypress test note')
        cy.get('[data-cy=newnotebutton]').click()
        cy.get('[data-cy=newnoteinput]').clear()


        cy.get('[data-cy=newnoteinput]').type('Cypress test note')
        cy.get('[data-cy=newnotebutton]').click()

        cy.get('[data-cy=newnotebutton]').should('be.disabled')

    })



 it('Can win game', () => {

        cy.get('[data-cy=getgame]').click()
   

        cy.get('[data-cy=00]').click()
        cy.get('[data-cy=01]').click()

        cy.get('[data-cy=10]').click()

        cy.get('[data-cy=11]').click()

        cy.get('[data-cy=21]').click()

 
        cy.get('[data-cy=13]').click()
        cy.get('[data-cy=14]').click()
        cy.get('[data-cy=23]').click()
        cy.get('[data-cy=30]').click()
        cy.get('[data-cy=32]').click()
        cy.get('[data-cy=40]').click()
        cy.get('[data-cy=44]').click()

        cy.get('[data-cy=check').click()

        cy.wait(1000)
        cy.contains('You won!').should('be.visible')
    
    })

    it('Can lose game', () => {

        cy.get('[data-cy=getgame]').click()
   

        cy.get('[data-cy=00]').click()
        cy.get('[data-cy=01]').click()

        cy.get('[data-cy=10]').click()

        cy.get('[data-cy=11]').click()

        cy.get('[data-cy=21]').click()

 
      
        cy.get('[data-cy=32]').click()
        cy.get('[data-cy=40]').click()
        cy.get('[data-cy=44]').click()

        cy.get('[data-cy=check').click()


        cy.wait(1000)

        cy.contains('You lost :(').should('be.visible')
    
    })

    it('No game found', () => {

        cy.get('[data-cy=getgame]').click()
   

        cy.wait(1000)

        cy.contains('No game found').should('be.visible')
    
    })


    
    it('Can logout', () => {

        cy.get('[data-cy=logout]').click()
   

        cy.wait(1000)

        cy.contains('Nonogram.io~').should('not.exist')
    
    })

    










})