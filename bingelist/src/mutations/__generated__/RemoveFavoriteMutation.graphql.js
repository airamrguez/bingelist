/**
 * @flow
 * @relayHash 03ebefc00d8c85d58a804ce25fc90fb2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MovieListItem_movie$ref = any;
export type RemoveFavoriteMutationVariables = {|
  movieId: number
|};
export type RemoveFavoriteMutationResponse = {|
  +removeFavorite: ?$ReadOnlyArray<{|
    +$fragmentRefs: MovieListItem_movie$ref
  |}>
|};
export type RemoveFavoriteMutation = {|
  variables: RemoveFavoriteMutationVariables,
  response: RemoveFavoriteMutationResponse,
|};
*/


/*
mutation RemoveFavoriteMutation(
  $movieId: Int!
) {
  removeFavorite(movieId: $movieId) {
    ...MovieListItem_movie
  }
}

fragment MovieListItem_movie on Movie {
  id
  title
  rating
  releaseYear
  tagline
  overview
  genres {
    name
  }
  poster(size: SMALL) {
    ...Poster_poster
  }
}

fragment Poster_poster on Poster {
  fullPath
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "movieId",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "movieId",
    "variableName": "movieId",
    "type": "Int!"
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "RemoveFavoriteMutation",
  "id": null,
  "text": "mutation RemoveFavoriteMutation(\n  $movieId: Int!\n) {\n  removeFavorite(movieId: $movieId) {\n    ...MovieListItem_movie\n  }\n}\n\nfragment MovieListItem_movie on Movie {\n  id\n  title\n  rating\n  releaseYear\n  tagline\n  overview\n  genres {\n    name\n  }\n  poster(size: SMALL) {\n    ...Poster_poster\n  }\n}\n\nfragment Poster_poster on Poster {\n  fullPath\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RemoveFavoriteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeFavorite",
        "storageKey": null,
        "args": v1,
        "concreteType": "Movie",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "MovieListItem_movie",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveFavoriteMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeFavorite",
        "storageKey": null,
        "args": v1,
        "concreteType": "Movie",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "rating",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "releaseYear",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "tagline",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "overview",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "genres",
            "storageKey": null,
            "args": null,
            "concreteType": "Genre",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "poster",
            "storageKey": "poster(size:\"SMALL\")",
            "args": [
              {
                "kind": "Literal",
                "name": "size",
                "value": "SMALL",
                "type": "PosterSize!"
              }
            ],
            "concreteType": "Poster",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "fullPath",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd568395c42ec616665e56f083496495f';
module.exports = node;
