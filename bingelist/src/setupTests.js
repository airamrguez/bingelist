import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import { QueryMock } from 'graphql-query-test-mock';
import { MockEnvironment } from 'relay-test-utils';

const queryMock = new QueryMock();
queryMock.setup('http://localhost:4000/graphql');

global.fetch = require('node-fetch');

jest.mock('react-relay', () => ({
  createFragmentContainer: component => component,
  createRefetchContainer: component => component,
  QueryRenderer: jest.fn(props => props.render(props)),
  commitMutation: jest.fn(),
}));

function mockMatchMedia(matches) {
  window.matchMedia = jest.fn().mockImplementation(query => {
    return {
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  });
}

const environment = MockEnvironment.createMockEnvironment();
const relay = {
  environment,
};

export { queryMock, mockMatchMedia, relay };
