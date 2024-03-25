describe('News Demo', () => {
  const baseUrl = Cypress.env('baseUrl');
  const siteName = 'News Demo';
  const pages = [
    // Front page.
    { path: '/news', title: 'News' },
    // Content Type - Topic.
    { path: '/fantasy', title: 'Fantasy' },
    // Content Type - Article.
    { path: '/news/give-your-oatmeal-ultimate-makeover', title: 'Give your oatmeal the ultimate makeover' },
    // Content Type - Audience.
    { path: '/youth', title: 'Youth' },
  ];

  const checkPage = (page) => {
    cy.visit(baseUrl + page.path);
    cy.get('.agree-button.eu-cookie-compliance-secondary-button').click();
    cy.title().should('equal', page.title + ' | ' + siteName);
  };

  pages.forEach(page => {
    it(`Visits and checks page: ${page.path}`, () => {
      cy.request({
        url: baseUrl + page.path,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
      checkPage(page);
    });
  });
});
