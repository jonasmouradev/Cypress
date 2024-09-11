describe("Delete InCheck", () => {
  it("Delete all InChecks", () => {
    cy.visit("https://social.incicle.com");
    cy.url().should(
      "include",
      "https://account.incicle.com/?redirect_to=social.incicle.com/"
    );
    cy.wait(5000);
    cy.get(":nth-child(3) > input").type("empresatestesara@gmail.com");
    cy.wait(1000);
    cy.get(":nth-child(4) > input").type("t553!AZpQ!9AL");
    cy.wait(1000);
    cy.get('[type="submit"]').click();
    cy.visit("https://incheck.incicle.com", { failOnStatusCode: false });
    cy.wait(5000);
    scrollTo(0, 500);
    for (let i = 0; i < 5; i++) {
      cy.get(":nth-child(1) > :nth-child(8) > #incheck-open-menu").click();
      cy.get("#incheck-delete").click({ force: true });
      cy.wait(1000);
      cy.contains("Deletar").click({ force: true });
    }
  });
  it.only("Delete all InChecks API", () => {
    const bearerToken =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NjaGVkdWxlLmJhY2tlbmQuc3RhZ2UuaW5jaWNsZS5jb20vYXBpL2F1dGgvYXV0aGVudGljYXRlIiwiaWF0IjoxNzI1MTMxNjI0LCJleHAiOjE3NjE0MTk2MjQsIm5iZiI6MTcyNTEzMTYyNCwianRpIjoickkxaFNnVVFDWjBmV2JINyIsInN1YiI6ImVlZWMyZDU0LTAyMWQtNDczYy1hYWU1LTBjYjVlY2ZkNTlmOSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJ1c2VyIjp7ImlkIjoiZWVlYzJkNTQtMDIxZC00NzNjLWFhZTUtMGNiNWVjZmQ1OWY5IiwidXNlcm5hbWUiOiJpbmNpY2xlYyIsImVtYWlsIjoiaW5jaWNsZUBpbmNpY2xlLmNvbSIsInR5cGUiOiJDT01QQU5ZIiwicHJvZmlsZV9pZCI6IjRkN2EyMTEwLTQ1YzUtNDY1ZC1iY2NmLTgwNjQxM2ZjMTAzNCIsImNvbmZpZyI6eyJtYXN0ZXIiOmZhbHNlLCJhdXRoMmYiOmZhbHNlLCJkZWZhdWx0X2xhbmd1YWdlIjoicHQtYnIiLCJkZWZhdWx0X2ludGVyZmFjZSI6IkxJR0hUIiwic2NoZWR1bGVfZGVmYXVsdCI6Ijk0Y2ZjYWYwLTkzMTgtNGFiNS1iNmFjLWVhNzk0OWIwNjQzMCIsImRlZmF1bHRfdGltZXpvbmUiOiJBbWVyaWNhL1Nhb19QYXVsbyJ9fX0.77IIQ-cEjPxLw_ARB0Un04qvCMIMYUA4BH_w_3yIWbQ";
    const companyId = "4d7a2110-45c5-465d-bccf-806413fc1034";

    cy.request({
      method: "GET",
      url: "https://competence.backend.stage.incicle.com/api/v1/in-check/evaluations?page=1&perPage=99999&finished=false",
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        companyId: companyId,
      },
    }).then((response) => {
      response.body.data.forEach((item) => {
        cy.request({
          method: "DELETE",
          url: `https://competence.backend.stage.incicle.com/api/v1/in-check/evaluations/${item.id}`,
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            companyId: companyId,
          },
        }).then((response) => {
          expect(response.status).to.eq(204);
        });
      });
    });
  });
});
