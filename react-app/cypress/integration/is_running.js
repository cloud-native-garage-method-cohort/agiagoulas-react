// cypress/integration/is_running.js

describe("health check", () => {
  it("is running", () => {
    cy.visit("http://localhost:3000");
  });
});
