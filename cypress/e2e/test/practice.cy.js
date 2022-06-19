/// <reference types="cypress" />

describe("Sauce Demo login sayfası testi", () => {
  it("TC001 - SauceDemo sayfasına git ve başlığı doğrula", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.title().should("eq", "Swag Labs");
  });

  it("TC002 - SauceDemo başarısız login testi", () => {
    cy.get("#user-name").type("user"); //username
    cy.get("#password").type("pass"); //password
    cy.get("#login-button").click(); //click action
  });

  it("TC003 - SauceDemo başarılı login testi", () => {
    cy.get("#user-name").clear().type("standard_user"); //username
    cy.get("#password").clear().type("secret_sauce"); //password
    cy.get("#login-button").click(); //click action
  });
});
