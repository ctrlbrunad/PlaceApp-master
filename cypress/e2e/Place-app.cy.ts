describe("Teste do Place APP", () => {
  it("should login and access the main page", () => {
    cy.viewport("iphone-x");
    cy.visit("localhost:8081/login");
    // credenciais válidas para o teste
    cy.get('input[placeholder="Email"]').type("teste@gmail.com");
    cy.get('input[placeholder="Senha"]').type("123");
    cy.contains("ENTRAR").click();

    cy.contains("Place").should("be.visible"); // verifica se a página principal foi carregada    cy.url().should("include", "/main");
    cy.contains("Home").should("be.visible");
    cy.contains("Perfil").should("be.visible");
    cy.wait(1000);
    cy.contains("Lugares").click();
    cy.wait(1000);
    cy.contains("Horus").click({ force: true });
    cy.wait(1000);

    cy.get('input[placeholder="Favoritar"]').click();
  });
});
