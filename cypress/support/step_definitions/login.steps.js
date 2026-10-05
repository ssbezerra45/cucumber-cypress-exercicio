import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário está na página de login", () => {
  cy.visit("login");
});

When(
  `o usuário informa um e-mail válido {string} e a senha correta {string}`,
  (email, senha) => {
    cy.get("#email").type(email);
    cy.get("#password").type(senha);
  },
);

When(`clica no botão de entrar`, () => {
  cy.get('button[type="submit"]').click();
});

Then(`o usuário deve ser redirecionado para o painel principal`, () => {
  cy.wait(3000);
});

Then(`deve visualizar a mensagem de boas-vindas {string}`, (mensagem) => {
  cy.get("h1").should("contain", mensagem);
});

When(
  `o usuário informa um e-mail válido {string} e a senha incorreta {string}`,
  (email, senha) => {
    cy.get("#email").type(email);
    cy.get("#password").type(senha);
  },
);

Then(`o usuário deve permanecer na página de login`, () => {
  cy.url().should("include", "/login");
});

Then(`deve visualizar a mensagem de erro {string}`, (mensagem) => {
  cy.get("#alert-container").should("contain", mensagem);
});
