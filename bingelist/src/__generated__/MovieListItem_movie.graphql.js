/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Poster_poster$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MovieListItem_movie$ref: FragmentReference;
export type MovieListItem_movie = {|
  +id: number,
  +title: string,
  +rating: number,
  +releaseYear: ?string,
  +tagline: ?string,
  +overview: ?string,
  +genres: ?$ReadOnlyArray<{|
    +name: string
  |}>,
  +poster: ?{|
    +$fragmentRefs: Poster_poster$ref
  |},
  +$refType: MovieListItem_movie$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MovieListItem_movie",
  "type": "Movie",
  "metadata": null,
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
          "kind": "FragmentSpread",
          "name": "Poster_poster",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '77e00371b4d236020533106efa6d23f0';
module.exports = node;
