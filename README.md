# My Binge List solution

## Introduction

This app has been bootstrapped using Create React App. I have tried to use as few third dependencies as possible, according to the specifications. In addittion to React and ReactDom dependencies, I have used:

- _idx_: to select properties on an object. Very useful in GraphQL.
- _react-media_: to conditionally render elements depending on the display size.
- _react-relay_: to query the GraphQL server.

I have also used some development dependencies for testing purposes like:

- _react-testing-library_ for unit testing and integration tests.
- _cypress_ for end to end testing.

The app implements the GraphQL API instead of the REST API. I had to fix 2 issues:

- The server was returning 500 status code for mutations. To avoid this error I downgraded the version in the docker-compose file to the previous version 0.2.2.
- There was no ID defined in the GraphQL schema resulting in an error in Relay, so I added one.

## Installation

To install dependencies run `yarn` inside the bingelist directory.

## Start the development server

To start the server run

```
yarn start
```

and head to http://localhost:3000

## Testing

To execute the unit test and integration test run

`yarn test`

To execute end to end testing run:

`yarn test:e2e`

The end to end tests are located under Cypres/e2e directory. The integration and unit tests are located under src/\_\_tests\_\_.

You can also run the end to end tests by opening the cypress browser with `yarn cy:open`.
