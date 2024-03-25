describe('Bookshop Demo', () => {
  const baseUrl = Cypress.env('baseUrl');
  const siteName = 'Bookshop Demo';
  const pages = [
    // Front page.
    { path: '/bookshop', title: 'Bookshop' },
    // Content Type - Article.
    { path: '/news/lion-mars', title: 'The Lion of Mars' },
    // Content Type - Audience.
    { path: '/youth', title: 'Youth' },
    // Content Type - Event.
    { path: '/events/adult-sci-fi-article-event', title: 'Adult Sci-fi article Event' },
    // Content Type - Page.
    { path: '/catalog', title: 'Catalog' },
    // Content Type - Person.
    { path: '/about/douglas-adams', title: 'Douglas Adams' },
    // Content Type - Topic.
    { path: '/fantasy', title: 'Fantasy' },
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
