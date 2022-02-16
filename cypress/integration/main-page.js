describe('Main page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it('Should be able to visit home page and display a title', () => {
        cy.get('h1').should('have.text', 'Turing Cafe Reservations')
        cy.get('.cards').should('have.length', 9)
    }) 

    it('Should display form to make reservations', () => {
        cy.get('input[name="name"]')
            .type('Francois')
            .should('have.value', 'Francois')
        cy.get('input[name="date"]')
            .type('2/20')
            .should('have.value', '2/20')
        cy.get('input[name="time"]')
            .type('5:45PM')
            .should('have.value', '5:45PM')
        cy.get('input[name="guests"]')
            .type('44')
            .should('have.value', '44')
        
    })

    it('Should be able to add reservations', () => {
        cy.get('button').click()
        cy.get('.cards').should('have.length', 10)
        

    })
})