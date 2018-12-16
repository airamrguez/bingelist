import React, { Suspense } from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../environment';
import FluidText from './FluidText';
import ErrorBoundary from './ErrorBoundary';
import { isNil } from '../utils';
import Router from './Router';
import './App.css';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <QueryRenderer
          environment={environment}
          query={graphql`
            query AppQuery {
              favorites {
                id
                ...MovieList_movies
              }
              ...MovieSearchPage_search
            }
          `}
          render={({ error, props }) => {
            if (!isNil(error)) {
              return (
                <FluidText
                  text={`An error ocurred.\nDid you start the server?`}
                />
              );
            }
            if (props) {
              const { favorites, ...rest } = props;
              return (
                <Suspense fallback={<FluidText text="Loading ..." />}>
                  <Router favorites={favorites} search={rest} />)
                </Suspense>
              );
            }
            return <FluidText text="Loading ..." />;
          }}
        />
      </ErrorBoundary>
    </div>
  );
}

export default App;
