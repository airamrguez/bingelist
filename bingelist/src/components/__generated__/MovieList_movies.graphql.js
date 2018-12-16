/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type MovieListItem_movie$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MovieList_movies$ref: FragmentReference;
export type MovieList_movies = $ReadOnlyArray<{|
  +id: number,
  +rating: number,
  +$fragmentRefs: MovieListItem_movie$ref,
  +$refType: MovieList_movies$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MovieList_movies",
  "type": "Movie",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
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
      "kind": "FragmentSpread",
      "name": "MovieListItem_movie",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '69386b32c79d71b508974a205851eea6';
module.exports = node;
