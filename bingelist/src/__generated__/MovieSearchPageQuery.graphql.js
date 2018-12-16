/**
 * @flow
 * @relayHash 88641c5d7bf1123539d44d4838a6ef90
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MovieList_movies$ref = any;
export type MovieSearchPageQueryVariables = {|
  genre: string
|};
export type MovieSearchPageQueryResponse = {|
  +allMovies: {|
    +data: ?$ReadOnlyArray<{|
      +$fragmentRefs: MovieList_movies$ref
    |}>
  |}
|};
export type MovieSearchPageQuery = {|
  variables: MovieSearchPageQueryVariables,
  response: MovieSearchPageQueryResponse,
|};
*/


/*
query MovieSearchPageQuery(
  $genre: String!
) {
  allMovies(genre: $genre, limit: 10) {
    data {
      ...MovieList_movies
    }
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
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "genre",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "genre",
    "variableName": "genre",
    "type": "String"
  },
  {
    "kind": "Literal",
    "name": "limit",
    "value": 10,
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MovieSearchPageQuery",
  "id": null,
  "text": "query MovieSearchPageQuery(\n  $genre: String!\n) {\n  allMovies(genre: $genre, limit: 10) {\n    data {\n      ...MovieList_movies\n    }\n  }\n}\n\nfragment MovieList_movies on Movie {\n  id\n  rating\n  ...MovieListItem_movie\n}\n\nfragment MovieListItem_movie on Movie {\n  id\n  title\n  rating\n  releaseYear\n  tagline\n  overview\n  genres {\n    name\n  }\n  poster(size: SMALL) {\n    ...Poster_poster\n  }\n}\n\nfragment Poster_poster on Poster {\n  fullPath\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MovieSearchPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allMovies",
        "storageKey": null,
        "args": v1,
        "concreteType": "MovieCollection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "data",
            "storageKey": null,
            "args": null,
            "concreteType": "Movie",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "MovieList_movies",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MovieSearchPageQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allMovies",
        "storageKey": null,
        "args": v1,
        "concreteType": "MovieCollection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "data",
            "storageKey": null,
            "args": null,
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
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f0e0e4f1a923e2d6e60b9659f06f0439';
module.exports = node;
