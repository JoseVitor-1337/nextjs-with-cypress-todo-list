describe('To Do List Page', () => {
  it('Should add a new task', () => {
    cy.visit('/')
    cy.get('[data-cy=task-input]').click()
    cy.get('[data-cy=task-input]').type('Nova tarefa')
    cy.get('[data-cy=add-task-btn]').click()
    cy.get('[data-cy=list-tasks]').contains('Nova tarefa')
  })

  it('Should add a task and removed after', () => {
    cy.visit('/')
    cy.get('[data-cy=task-input]').click()
    cy.get('[data-cy=task-input]').type('tarefa')
    cy.get('[data-cy=add-task-btn]').click()
    cy.get('[data-cy=list-tasks]').contains('tarefa')
    cy.get('[data-cy=task-input]').click()
    cy.get('[data-cy=task-input]').type('outra-coisa')
    cy.get('[data-cy=add-task-btn]').click()
    cy.get('[data-cy=list-tasks]').contains('outra-coisa')
    cy.get('[data-cy=tarefa-remove-btn]').click()
    cy.get('[data-cy=list-tasks]').should('not.contain', 'tarefa')
  })

  it('Should add a task and active', () => {
    cy.visit('/')
    cy.get('[data-cy=task-input]').click()
    cy.get('[data-cy=task-input]').type('tarefa')
    cy.get('[data-cy=add-task-btn]').click()
    cy.get('[data-cy=inactive-tarefa]').click()
    cy.get('[data-cy=active-tarefa]').should('not.be.visible')
  })
})

export {}
