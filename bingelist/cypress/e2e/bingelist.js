/// <reference types="Cypress" />

/* globals cy */

describe('client is resilient to errors', () => {
  it('shows an error when the server is down', () => {
    cy.mockGraphQLError()
      .visit('/')
      .getByText(/An error ocurred/)
      .should('exist');
  });

  describe('server errors', () => {
    const ErrorMessage = 'Genre not found';
    beforeEach(() => {
      cy.mockGraphQL([
        {
          operation: 'MovieSearchPageRefetchQuery',
          response: {
            data: null,
            errors: [
              {
                message: ErrorMessage,
              },
            ],
          },
        },
      ]);
      cy.visit('/').getByText('Search').textContent = '';
    });

    it('shows errors in the UI as returned by the server', () => {
      cy.getByLabelText('Movie genre')
        .type('Non Existing Genre')
        .getByText('Search')
        .click()
        .getByText(ErrorMessage)
        .should('exist');
    });

    // TODO: Here we should test that errors related to mutations were shown
    // in the UI but as they are not considered in the design there are no implemented
  });
});

describe('no server errors', () => {
  beforeEach(function() {
    // Fetch fixtures.
    cy.fixture('app-query').as('appQuery');
    cy.fixture('all-movies').as('allMovies');
    cy.fixture('add-favorite-mutation').as('AddFavoriteMutation');
    cy.fixture('remove-favorite-mutation').as('RemoveFavoriteMutation');
  });

  context('mock GraphQL queries and mutations', () => {
    beforeEach(function() {
      cy.mockGraphQL([
        this.appQuery,
        this.allMovies,
        this.AddFavoriteMutation,
        this.RemoveFavoriteMutation,
      ]);
      cy.visit('/').getByText('Search').textContent = '';
    });

    it('renders results when searching for Adventure movies', () => {
      cy.getByLabelText('Movie genre')
        .type('Adventure')
        .getByText('Search')
        .click();
    });

    it('adds a movie into favorites', () => {
      cy.getByLabelText('Movie genre')
        .type('Adventure')
        .getByText('Search')
        .click()
        .getByTestId('movie-205596')
        .within(() => {
          cy.get('.bookmark button').click();
        })
        .getByTestId('show-favorites-button')
        .click();
      cy.get('.container:last-child')
        .queryByTestId('movie-205596')
        .should('exist');
    });

    it('removes a movie from favorites', () => {
      cy.getByTestId('show-favorites-button')
        .click()
        .getByTestId('movie-1724')
        .within(() => {
          cy.get('.bookmark button').click();
        });
      cy.get('.container:last-child')
        .queryByTestId('movie-1724')
        .should('not.exist');
    });

    it('preserves previous search across page routing', () => {
      cy.getByLabelText('Movie genre')
        .type('Adventure')
        .getByText('Search')
        .click()
        .getByTestId('show-favorites-button')
        .click()
        .getByTestId('go-back-button')
        .click();

      cy.get('.container:first-child').should('not.be.empty');
    });
  });
});
