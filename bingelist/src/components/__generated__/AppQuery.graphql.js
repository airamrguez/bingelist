/**
 * @flow
 * @relayHash 8517acc1dbf6d98f5fab6993fc55477c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MovieList_movies$ref = any;
type MovieSearchPage_search$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +favorites: ?$ReadOnlyArray<{|
    +id: number,
    +$fragmentRefs: MovieList_movies$ref,
  |}>,
  +$fragmentRefs: MovieSearchPage_search$ref,
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  favorites {
    id
    ...MovieList_movies
  }
}

fragment MovieList_movies on Movie {
  id
  rating
  ...MovieListItem_movie
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery {\n  favorites {\n    id\n    ...MovieList_movies\n  }\n}\n\nfragment MovieList_movies on Movie {\n  id\n  rating\n  ...MovieListItem_movie\n}\n\nfragment MovieListItem_movie on Movie {\n  id\n  title\n  rating\n  releaseYear\n  tagline\n  overview\n  genres {\n    name\n  }\n  poster(size: SMALL) {\n    ...Poster_poster\n  }\n}\n\nfragment Poster_poster on Poster {\n  fullPath\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "favorites",
        "storageKey": null,
        "args": null,
        "concreteType": "Movie",
        "plural": true,
        "selections": [
          v0,
          {
            "kind": "FragmentSpread",
            "name": "MovieList_movies",
            "args": null
          }
        ]
      },
      {
        "kind": "FragmentSpread",
        "name": "MovieSearchPage_search",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "favorites",
        "storageKey": null,
        "args": null,
        "concreteType": "Movie",
        "plural": true,
        "selections": [
          v0,
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
            "name": "title",
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
(node/*: any*/).hash = 'a48946678363d90ffc55eab53cd9b8a1';
module.exports = node;
