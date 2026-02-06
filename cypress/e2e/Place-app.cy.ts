describe("Teste do Place APP", () => {
  it("should Register and access the main page", () => {
    cy.viewport("iphone-x");
    cy.visit("localhost:8081/login");
    // credenciais válidas para o teste
    // cy.get('input[placeholder="Nome Completo"]').type("Jorge Luiz");
    // cy.get('input[placeholder="Email"]').type("teste@place.com");
    // cy.get('input[placeholder="Senha"]').type("123456789");
    // cy.contains("CADASTRAR").click();
    // cy.wait(1000);
    // fazer o login com o mesmo usuário para acessar a página principal
    cy.get('input[placeholder="Email"]').type("teste@place.com");
    cy.get('input[placeholder="Senha"]').type("123456789");
    cy.contains("ENTRAR").click();
    cy.wait(1000);
    cy.contains("Place").should("be.visible"); // verifica se a página principal foi carregada    cy.url().should("include", "/main");
    cy.contains("Home").should("be.visible");
    cy.wait(1000);
    cy.contains("Perfil").should("be.visible");
    cy.wait(1000);
    cy.contains("Lugares").click();
    cy.wait(1000);
    cy.contains("Horus").click({ force: true });
    cy.wait(1000);
    cy.contains("Avaliar").click();
    cy.wait(1000);
    cy.contains("Cancelar").click();
    cy.contains("back").click({ force: true });
    cy.contains("Placelists").click();
    cy.wait(1000);
  });
});
