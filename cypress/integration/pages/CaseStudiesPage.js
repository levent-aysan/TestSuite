import {} from "cypress-xpath";

class CaseStudiesPage {
  visit() {
    cy.visit("/");
  }

  findOurProudAchievements() {
    return cy.contains("Our Proud Achievements");
  }
}
export default CaseStudiesPage;
