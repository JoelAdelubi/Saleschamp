context('Navigate to main page', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('[href="/careers"]').eq(0).click()

    })
    it('View list of available careers roles', () => {
        cy.contains('VIEW HOT ROLES').click()
        cy.get('#open-positions').should('exist')

    })
    it('Apply for Backend role', () => {
        const applytext = "cypress/fixtures/message.txt"
        cy.readFile(applytext).should('exist').then((text) => {
            const input = text
            cy.contains('VIEW HOT ROLES').click()
            cy.contains('Backend').parent().contains('apply now').click()
            cy.get('#Name---Careers').should('be.visible').type('John Doe', { force: true })
            cy.get('#Email---Careers').should('be.visible').type('john.doe@email.com', { force: true })
            cy.get('#Careers-Message').type(input, { force: true })
                //cy.get('[type="submit"]').should('be.visible').submit()

        })

    })
})