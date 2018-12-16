/* globals Cypress, cy */

Cypress.Commands.add('mockGraphQL', stubs => {
  cy.on('window:before:load', win => {
    cy.stub(win, 'fetch', (...args) => {
      const [url, request] = args;
      if (url.indexOf('graphql') !== -1) {
        const postBody = JSON.parse(request.body);
        const operationName = postBody.operation.operation.name;

        for (let stub of stubs) {
          if (operationName === stub.operation) {
            return Promise.resolve({
              status: 200,
              json() {
                return Promise.resolve(stub.response);
              },
            });
          }
        }
      }
      return fetch(...args);
    });
  });
});

Cypress.Commands.add('mockGraphQLError', stubs => {
  cy.on('window:before:load', win => {
    cy.stub(win, 'fetch', (...args) => {
      const [url] = args;
      if (url.indexOf('graphql') !== -1) {
        return Promise.resolve({
          status: 500,
          json() {
            return Promise.resolve({
              errors: [{ message: 'Server is down' }],
            });
          },
        });
      }
      return fetch(...args);
    });
  });
});
