const headers = {
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NjaGVkdWxlLmJhY2tlbmQuc3RhZ2UuaW5jaWNsZS5jb20vYXBpL2F1dGgvYXV0aGVudGljYXRlIiwiaWF0IjoxNzI0OTMxNjMwLCJleHAiOjE3NjEyMTk2MzAsIm5iZiI6MTcyNDkzMTYzMCwianRpIjoiQkRzVU5TNFN0OXU0TGxzUSIsInN1YiI6ImVlZWMyZDU0LTAyMWQtNDczYy1hYWU1LTBjYjVlY2ZkNTlmOSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJ1c2VyIjp7ImlkIjoiZWVlYzJkNTQtMDIxZC00NzNjLWFhZTUtMGNiNWVjZmQ1OWY5IiwidXNlcm5hbWUiOiJpbmNpY2xlYyIsImVtYWlsIjoiaW5jaWNsZUBpbmNpY2xlLmNvbSIsInR5cGUiOiJDT01QQU5ZIiwicHJvZmlsZV9pZCI6IjRkN2EyMTEwLTQ1YzUtNDY1ZC1iY2NmLTgwNjQxM2ZjMTAzNCIsImNvbmZpZyI6eyJtYXN0ZXIiOmZhbHNlLCJhdXRoMmYiOmZhbHNlLCJkZWZhdWx0X2xhbmd1YWdlIjoicHQtYnIiLCJkZWZhdWx0X2ludGVyZmFjZSI6IkxJR0hUIiwic2NoZWR1bGVfZGVmYXVsdCI6Ijk0Y2ZjYWYwLTkzMTgtNGFiNS1iNmFjLWVhNzk0OWIwNjQzMCIsImRlZmF1bHRfdGltZXpvbmUiOiJBbWVyaWNhL1Nhb19QYXVsbyJ9fX0.jywNQxbbm2NZbOUEI4DLzJs3R1jud-dRmvT4VVbk2Hc",
  companyId: "4d7a2110-45c5-465d-bccf-806413fc1034",
};

describe("Create InCheck", () => {
  it("Create InCheck", () => {
    cy.fixture('incheck.json').then((incheckData) => {
      incheckData.forEach((item) => {
        const payload = {
          title: item.title,
          description: item.description,
          end: "2024-09-27T17:07",
          managers: [],
          message: "Seja imparcial e justo na sua avaliação!",
          quiz_id: "9ce21f81-3508-4ea1-b264-e1d3530c9202",
          repeat: 1,
          responsible: ["ff7f2225-5208-45cf-bd82-89c32984c5b0"],
          sectors: ["b3ef9ca6-04f6-49bb-92d5-6d441f70c52c"],
          start: "2024-09-26T17:07",
          units: [
            "2e22d5cd-d164-426c-b063-404cb2f7aaa8",
            "fc42613e-2a0e-46c8-91a4-8d543d6dcee7",
          ],
          view_categories: false,
        };

        cy.request({
          method: "POST",
          url: "https://competence.backend.stage.incicle.com/api/v1/in-check/evaluations",
          headers: headers,
          body: payload,
        }).then((response) => {
          expect(response.status).to.eq(201);
        });
        cy.wait(1000);
      });
    });
  });
});