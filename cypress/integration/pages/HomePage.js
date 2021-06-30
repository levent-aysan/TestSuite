import {} from "cypress-xpath";

class HomePage {
  visit() {
    cy.visit("/");
  }

  getCaseStudies() {
    return cy.xpath('//*[@id="menu-item-5520"]/a');
  }

  getMenuToggle() {
    return cy.get("#menu-toggle");
  }

  getAboutUs() {
    return cy.contains("About Us");
  }

  getFistContact() {
    return cy.get('a[href*="contact"]').first();
  }
}
export default HomePage;
