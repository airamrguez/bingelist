import React, { Component } from 'react';
import { isEmpty } from '../utils';

const MovieSearchPage = React.lazy(() => import('./MovieSearchPage'));
const FavoriteMoviesPage = React.lazy(() => import('./FavoriteMoviesPage'));

// This is a very naive router to satisfy the requirements and to
// avoid using other libraries for this purpose.
export default class Router extends Component {
  state = {
    pageStack: ['search'],
  };
  navigate = pageName => {
    this.setState(state => ({
      pageStack: [...state.pageStack, pageName],
    }));
  };
  goBack = () => {
    const pageStack = this.state.pageStack.slice(0, -1);
    if (!isEmpty(pageStack)) {
      this.setState({ pageStack });
    }
  };
  render() {
    const { pageStack } = this.state;
    return pageStack.map(routeName => {
      const Component = getPageForRoute(routeName);
      return (
        <Component
          {...this.props}
          key={`page-${routeName}`}
          navigation={{
            navigate: this.navigate,
            goBack: this.goBack,
          }}
        />
      );
    });
  }
}

function getPageForRoute(routeName) {
  switch (routeName) {
    case 'favorites':
      return FavoriteMoviesPage;
    case 'search':
    default:
      return MovieSearchPage;
  }
}
