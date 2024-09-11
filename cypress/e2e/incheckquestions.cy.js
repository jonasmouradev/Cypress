const headers = {
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NjaGVkdWxlLmJhY2tlbmQuc3RhZ2UuaW5jaWNsZS5jb20vYXBpL2F1dGgvYXV0aGVudGljYXRlIiwiaWF0IjoxNzI2MDc5MjQ3LCJleHAiOjE3NjIzNjcyNDcsIm5iZiI6MTcyNjA3OTI0NywianRpIjoidkswc3VlMm9jQnI1YXd2QiIsInN1YiI6ImVlZWMyZDU0LTAyMWQtNDczYy1hYWU1LTBjYjVlY2ZkNTlmOSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJ1c2VyIjp7ImlkIjoiZWVlYzJkNTQtMDIxZC00NzNjLWFhZTUtMGNiNWVjZmQ1OWY5IiwidXNlcm5hbWUiOiJpbmNpY2xlYyIsImVtYWlsIjoiaW5jaWNsZUBpbmNpY2xlLmNvbSIsInR5cGUiOiJDT01QQU5ZIiwicHJvZmlsZV9pZCI6IjRkN2EyMTEwLTQ1YzUtNDY1ZC1iY2NmLTgwNjQxM2ZjMTAzNCIsImNvbmZpZyI6eyJtYXN0ZXIiOmZhbHNlLCJhdXRoMmYiOmZhbHNlLCJkZWZhdWx0X2xhbmd1YWdlIjoicHQtYnIiLCJkZWZhdWx0X2ludGVyZmFjZSI6IkxJR0hUIiwic2NoZWR1bGVfZGVmYXVsdCI6Ijk0Y2ZjYWYwLTkzMTgtNGFiNS1iNmFjLWVhNzk0OWIwNjQzMCIsImRlZmF1bHRfdGltZXpvbmUiOiJBbWVyaWNhL1Nhb19QYXVsbyJ9fX0.sIdZeF47dkw4mQFPGCq6X4Q3WANGPVNQgKmFjxIdvfY",
  companyid: "4d7a2110-45c5-465d-bccf-806413fc1034",
};

describe("Create InCheck Questions", () => {
  it("Create InCheck Questions", () => {
    cy.fixture("incheckquestions.json").then((incheckQuestionsData) => {
      incheckQuestionsData.forEach((item) => {
        const payload = {
          question: item.question,
          type: item.type,
          options: item.options,
          correct_answer: item.correct_answer,
          evaluation_id: "f4f4e4b6-3e0c-4f6f-8f1f-2e6f6e6d1f2c",
        };

        cy.request({
          method: "POST",
          url: "https://competence.backend.stage.incicle.com/api/v1/in-check/questions",
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
