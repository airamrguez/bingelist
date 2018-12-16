/**
 * @flow
 * @relayHash 57e9619edf43e9ddda0b053b109ac08c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MovieSearchPage_search$ref = any;
export type MovieSearchPageRefetchQueryVariables = {|
  genre: string,
  hasGenre: boolean,
|};
export type MovieSearchPageRefetchQueryResponse = {|
  +$fragmentRefs: MovieSearchPage_search$ref
|};
export type MovieSearchPageRefetchQuery = {|
  variables: MovieSearchPageRefetchQueryVariables,
  response: MovieSearchPageRefetchQueryResponse,
|};
*/


/*
query MovieSearchPageRefetchQuery(
  $genre: String!
  $hasGenre: Boolean!
) {
  ...MovieSearchPage_search_11TiHK
}

fragment MovieSearchPage_search_11TiHK on Query {
  allMovies(genre: $genre, limit: 10) @include(if: $hasGenre) {
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
  },
  {
    "kind": "LocalArgument",
    "name": "hasGenre",
    "type": "Boolean!",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MovieSearchPageRefetchQuery",
  "id": null,
  "text": "query MovieSearchPageRefetchQuery(\n  $genre: String!\n  $hasGenre: Boolean!\n) {\n  ...MovieSearchPage_search_11TiHK\n}\n\nfragment MovieSearchPage_search_11TiHK on Query {\n  allMovies(genre: $genre, limit: 10) @include(if: $hasGenre) {\n    data {\n      ...MovieList_movies\n    }\n  }\n}\n\nfragment MovieList_movies on Movie {\n  id\n  rating\n  ...MovieListItem_movie\n}\n\nfragment MovieListItem_movie on Movie {\n  id\n  title\n  rating\n  releaseYear\n  tagline\n  overview\n  genres {\n    name\n  }\n  poster(size: SMALL) {\n    ...Poster_poster\n  }\n}\n\nfragment Poster_poster on Poster {\n  fullPath\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MovieSearchPageRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "MovieSearchPage_search",
        "args": [
          {
            "kind": "Variable",
            "name": "genre",
            "variableName": "genre",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "hasGenre",
            "variableName": "hasGenre",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MovieSearchPageRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "hasGenre",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allMovies",
            "storageKey": null,
            "args": [
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
            ],
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
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b131381162c27ad62075a3e886b74fc4';
module.exports = node;
