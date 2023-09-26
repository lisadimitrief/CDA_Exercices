describe('template spec', () => {
  it('visite le site internet de DSI', () => {
    cy.visit('https://www.dsi-ap.com/site_dsi/')
  
    cy.contains('Vos avantages').click()

    cy.url().should('eq', 'https://www.dsi-ap.com/site_dsi/vos-avantages.html')
  })
})