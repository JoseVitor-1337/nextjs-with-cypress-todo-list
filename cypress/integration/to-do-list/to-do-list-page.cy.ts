describe('To Do List Page', () => {
  it('Should add a new task', () => {
    cy.visit('/')
    cy.get('#task-input').click()
    cy.get('#task-input').type('Nova tarefa')
    cy.get('#add-task-btn').click()
    cy.get('#list-tasks').should('have.length.greaterThan', 0)
    cy.contains('Nova tarefa').should('have.length.greaterThan', 0)
  })

  it('Should add a another task', () => {
    cy.visit('/')
    cy.get('#task-input').click()
    cy.get('#task-input').type('Outra tarefa')
    cy.get('#add-task-btn').click()
    cy.get('#list-tasks').should('have.length.at.least', 1)
    cy.contains('Outra tarefa').should('have.length.at.least', 1)
  })
})
