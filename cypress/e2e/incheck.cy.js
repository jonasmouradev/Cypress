const headers = {
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NjaGVkdWxlLmJhY2tlbmQuaW5jaWNsZS5jb20vYXBpL2F1dGgvYXV0aGVudGljYXRlIiwiaWF0IjoxNzI1MDY2NzY3LCJleHAiOjE3NjEzNTQ3NjcsIm5iZiI6MTcyNTA2Njc2NywianRpIjoiaVJQZDVBQ0tRRXpDRk1qZCIsInN1YiI6IjU3Yzk4NWQ2LTlhNTUtNGYyMi1iNjc2LTJmODU2MDFhZDc1ZSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJ1c2VyIjp7ImlkIjoiNTdjOTg1ZDYtOWE1NS00ZjIyLWI2NzYtMmY4NTYwMWFkNzVlIiwidXNlcm5hbWUiOiJiYXRhdGFjYXRzIiwiZW1haWwiOiJlbXByZXNhdGVzdGVzYXJhQGdtYWlsLmNvbSIsInR5cGUiOiJDT01QQU5ZIiwicHJvZmlsZV9pZCI6ImMzMzg1NWIxLTZmZmItNGNkYS1hNDk5LWE1Yzk2Yjc4NmIzYSIsImNvbmZpZyI6eyJtYXN0ZXIiOmZhbHNlLCJhdXRoMmYiOmZhbHNlLCJkZWZhdWx0X2xhbmd1YWdlIjoicHQtYnIiLCJkZWZhdWx0X2ludGVyZmFjZSI6IkxJR0hUIiwic2NoZWR1bGVfZGVmYXVsdCI6Ijk4ZjYyNDA5LTcwZjYtNGY1MC04ZTZjLTE4ZmM2YTgwOWY1NCIsImRlZmF1bHRfdGltZXpvbmUiOiJBbWVyaWNhL1Nhb19QYXVsbyJ9fX0.p5LEjh9Vf9pHEZ22fMbCluXZjgK-inbCRnOhhKmH4i8",
  companyId: "c33855b1-6ffb-4cda-a499-a5c96b786b3a",
};

describe("Create InCheck", () => {
  it("Create InCheck", () => {
    cy.fixture("incheck.json").then((incheckData) => {
      incheckData.forEach((item) => {
        const payload = {
          title: item.title,
          description: item.description,
          end: "2024-09-01T18:00",
          managers: ["405d8fd8-9097-4b30-99ac-870b9a673b77"],
          message: "Seja imparcial e justo na sua avaliação!",
          quiz_id: item.quiz_id,
          repeat: 1,
          responsible: ["e746db97-3991-4c5c-a7a2-5a149a956bfc"],
          sectors: [
            "41d032d0-1fd6-4976-b6c5-db152b9630ca",
            "893d7063-d80d-474b-bf83-dbba447477a8",
            "7a1164cf-c1ff-442c-81b1-d832e3483633",
          ],
          start: "2024-08-31T10:00",
          units: ["53921fcd-0150-4566-85fa-9a818bb6746b"],
          view_categories: false,
        };

        cy.request({
          method: "POST",
          url: "https://competence.backend.incicle.com/api/v1/in-check/evaluations",
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
