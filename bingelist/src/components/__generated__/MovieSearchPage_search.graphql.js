/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type MovieList_movies$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MovieSearchPage_search$ref: FragmentReference;
export type MovieSearchPage_search = {|
  +allMovies?: {|
    +data: ?$ReadOnlyArray<{|
      +$fragmentRefs: MovieList_movies$ref
    |}>
  |},
  +$refType: MovieSearchPage_search$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MovieSearchPage_search",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "genre",
      "type": "String!",
      "defaultValue": ""
    },
    {
      "kind": "LocalArgument",
      "name": "hasGenre",
      "type": "Boolean!",
      "defaultValue": false
    }
  ],
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
                  "kind": "FragmentSpread",
                  "name": "MovieList_movies",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '5fce43c237a58448012b96c5616980b3';
module.exports = node;
