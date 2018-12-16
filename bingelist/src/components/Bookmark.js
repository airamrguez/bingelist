import React from 'react';
import AddFavoriteMutation from '../mutations/AddFavoriteMutation';
import RemoveFavoriteMutation from '../mutations/RemoveFavoriteMutation';

function Bookmark(props) {
  const { movieId, isFavorite, relay } = props;
  const icon = isFavorite ? 'remove_favorite' : 'add_favorite';

  function handleClick() {
    const action = isFavorite ? RemoveFavoriteMutation : AddFavoriteMutation;

    action.commit(relay.environment, movieId);
  }

  return (
    <button onClick={handleClick}>
      <img
        src={require(`../assets/svg/${icon}.svg`)}
        alt={
          isFavorite ? 'Remove movie from bookmarks' : 'Add movie to bookmark'
        }
        data-testid={`bookmark-icon-${movieId}`}
      />
    </button>
  );
}

Bookmark.defaultProps = {
  isFavorite: false,
};

export default Bookmark;
