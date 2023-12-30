describe('terrain spec', () => {
  it('renders', () => {
    cy.visit('http://localhost:3000')
    cy.get('#terrain1-1').should('exist')
  })
})
