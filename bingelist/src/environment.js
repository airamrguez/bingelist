import { Environment, RecordSource, Store, Network } from 'relay-runtime';
import { isNil, stringifyIds } from './utils';

const API_ENDPOINT = 'http://localhost:4000/graphql';

export default new Environment({
  network: Network.create((operation, variables) =>
    fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
        // Add operation only on dev mode for testing purposes.
        ...(process.env.NODE_ENV !== 'production' ? { operation } : undefined),
      }),
    })
      .then(response => {
        const { status } = response;
        if (status >= 200 && status < 300) {
          return response;
        }
        return Promise.reject([
          { message: 'Could not reach the server. Try again later.' },
        ]);
      })
      .then(response => response.json())
      .then(json => {
        if (!isNil(json.errors)) {
          return Promise.reject(json.errors);
        }
        return json;
      })
      // The backend provides the ids as integers but they should be strings.
      .then(stringifyIds),
  ),
  store: new Store(new RecordSource()),
});
