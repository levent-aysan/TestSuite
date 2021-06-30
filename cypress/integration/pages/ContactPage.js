class ContactPage {
  submit() {
    const button = cy.get("#gform_submit_button_1");
    button.click();
  }

  getError() {
    return cy.contains(
      "There was a problem with your submission. Please review the fields below."
    );
  }
}
export default ContactPage;
