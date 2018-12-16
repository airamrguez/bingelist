import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import favoriteUpdater from './favoriteUpdater';
import { isEmpty } from '../utils';

const mutation = graphql`
  mutation AddFavoriteMutation($movieId: Int!) {
    addFavorite(movieId: $movieId) {
      ...MovieListItem_movie
    }
  }
`;

// TODO: As an enhancement optimisticResponse should be added.
function commit(environment, movieId) {
  commitMutation(environment, {
    mutation,
    variables: {
      movieId: parseInt(movieId, 10),
    },
    updater: store => favoriteUpdater(store, 'addFavorite'),
    onCompleted: (response, errors) => {
      // TODO: Errors should be shown in the UI but
      // there is no visual component in the design to show
      // them. So instead of inventing a new component the errors
      // will be logged into the console.
      if (!isEmpty(errors)) {
        console.log(errors);
      }
    },
  });
}

export default { commit };
