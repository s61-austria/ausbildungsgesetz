describe('My First Test', function() {
    it('Does not do much!', function() {
        cy.visit('/')

        cy.contains("KontoFahren")
    })
})

describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
        cy.visit('https://example.cypress.io')

        cy.contains("type").click()

        cy.url().should('include', '/commands/actions')
    })
})