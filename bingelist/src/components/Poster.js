import React from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

function Poster(props) {
  const { poster, alt } = props;
  return <img className="poster" src={poster.fullPath} alt={alt} />;
}

Poster.defaultProps = {
  alt: '',
};

export default createFragmentContainer(
  Poster,
  graphql`
    fragment Poster_poster on Poster {
      fullPath
    }
  `,
);
