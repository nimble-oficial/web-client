describe("Create command", () => {
  beforeEach(() => {
    cy.visit("/commands")
  })

  it("Creates new command", () => {
    cy.wait(1000)

    cy.findByTestId("create-command-button").click()
    cy.findByTestId("create-command-dialog").within(() => {
      cy.findByText("Create Command").should("exist")
      cy.findByTestId("create-command-name").focus().type("by-cypress-e2e")
      cy.wait(500)
      cy.findByTestId("create-command-button").click()
    })

    cy.findByText("Command created successfully!").should("exist")
  })

  it("Deletes previously created command", () => {
    cy.get(".grid-cols-3 > :nth-child(1)").within(() => {
      cy.findByText("!by-cypress-e2e").should("exist")
      cy.findByTestId("commands-card-actions-button").click()
    })

    cy.findByTestId("commands-card-actions-delete-button").click()
    cy.findByTestId("delete-command-dialog-confirm-button").click()
  })

  it("Can not create command with same name", () => {
    cy.wait(1000)

    cy.findByTestId("create-command-button").click()
    cy.findByTestId("create-command-dialog").within(() => {
      cy.findByText("Create Command").should("exist")
      cy.findByTestId("create-command-name").focus().type("by-cypress-e2e")
      cy.wait(500)
      cy.findByTestId("create-command-button").click()
    })

    cy.findByTestId("create-command-button").click()
    cy.findByTestId("create-command-dialog").within(() => {
      cy.findByText("Create Command").should("exist")
      cy.findByTestId("create-command-name").focus().type("by-cypress-e2e")
      cy.wait(500)
      cy.findByTestId("create-command-button").click()
    })

    cy.findByText("Command already exists").should("exist")

    cy.wait(500)

    cy.get(".grid-cols-3 > :nth-child(1)").within(() => {
      cy.findByText("!by-cypress-e2e").should("exist")
      cy.findByTestId("commands-card-actions-button").click()
    })

    cy.findByTestId("commands-card-actions-delete-button").click()
    cy.findByTestId("delete-command-dialog-confirm-button").click()

    cy.findByText("Command deleted successfully!").should("exist")
  })
})
