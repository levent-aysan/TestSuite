import chaiColors from "chai-colors";
import HomePage from "./pages/HomePage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";

chai.use(chaiColors);

describe("Test fruition.com", () => {
  const homePage = new HomePage();

  beforeEach(() => {
    homePage.visit();
  });

  it("'Our Proud Achievements' text is visiable in 'Case Studies' link", () => {
    const caseStudiesPage = new CaseStudiesPage();

    homePage.getCaseStudies().click({ force: true });
    caseStudiesPage.findOurProudAchievements().should("be.visible");
  });

  it("The font colour for the paragraph starting with 'Fruition Consulting provides the digital expertise...' is #163246 on 'About Us'", () => {
    const aboutUsPage = new AboutUsPage();

    homePage.getMenuToggle().click();
    homePage.getAboutUs().click({ force: true });
    aboutUsPage
      .getFruitionText()
      .should("be.visible")
      .should("have.css", "color")
      .should("be.colored", "#163246");
  });

  it("an error message appears when the form is incomplete", () => {
    const contactPage = new ContactPage();

    homePage.getFistContact().click({ force: true });
    contactPage.submit();
    contactPage.getError().should("be.visible");
  });
});
