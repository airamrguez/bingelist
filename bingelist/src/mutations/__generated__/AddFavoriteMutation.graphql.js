/**
 * @flow
 * @relayHash 1174903525223235b33ac2909cdcb976
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MovieListItem_movie$ref = any;
export type AddFavoriteMutationVariables = {|
  movieId: number
|};
export type AddFavoriteMutationResponse = {|
  +addFavorite: ?$ReadOnlyArray<{|
    +$fragmentRefs: MovieListItem_movie$ref
  |}>
|};
export type AddFavoriteMutation = {|
  variables: AddFavoriteMutationVariables,
  response: AddFavoriteMutationResponse,
|};
*/


/*
mutation AddFavoriteMutation(
  $movieId: Int!
) {
  addFavorite(movieId: $movieId) {
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
  "name": "AddFavoriteMutation",
  "id": null,
  "text": "mutation AddFavoriteMutation(\n  $movieId: Int!\n) {\n  addFavorite(movieId: $movieId) {\n    ...MovieListItem_movie\n  }\n}\n\nfragment MovieListItem_movie on Movie {\n  id\n  title\n  rating\n  releaseYear\n  tagline\n  overview\n  genres {\n    name\n  }\n  poster(size: SMALL) {\n    ...Poster_poster\n  }\n}\n\nfragment Poster_poster on Poster {\n  fullPath\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddFavoriteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addFavorite",
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
    "name": "AddFavoriteMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addFavorite",
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
(node/*: any*/).hash = '28213520918ceadfc0b80ec8b06d14d4';
module.exports = node;
