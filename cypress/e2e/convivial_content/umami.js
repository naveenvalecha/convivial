describe('Umami Demo', () => {
  const baseUrl = Cypress.env('baseUrl');
  const siteName = 'Umami Demo';
  const pages = [
    // Front page.
    { path: '/umami', title: 'Umami' },
    // Content Type - Page.
    { path: '/about-umami', title: 'About Umami' },
    // Content Type - Topic.
    { path: '/baked', title: 'Baked' },
    // Content Type - Article.
    { path: '/news/dairy-free-and-delicious-milk-chocolate', title: 'Dairy-free and delicious milk chocolate' },
    // Content Type - Audience.
    { path: '/main-courses', title: 'Main courses' },
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
