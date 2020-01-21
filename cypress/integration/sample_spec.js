describe('My First Test', function() {
    it('Visits nonogram site', function() {
      cy.visit('http://localhost:3000/')
      cy.contains('Login').click()
    })
  })