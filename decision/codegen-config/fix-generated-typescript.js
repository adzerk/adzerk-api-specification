#!/usr/bin/env node
'use strict';

// openapi-generator's typescript-fetch templates build (de)serializer calls by
// concatenating the property's raw TS type with "FromJSON"/"ToJSON". For a plain
// $ref that works (e.g. DecisionFromJSON), but for a `oneOf` of multiple types the
// generator emits the type text itself glued to the suffix, producing invalid
// TypeScript. Two known cases:
// - DecisionResponse's `decisions` map value is `oneOf: [Decision, DecisionArray]`,
//   producing `Decision | DecisionArrayFromJSON`. Rewrite it to a real dispatcher.
// - AdQueryOperator's `eq` is `oneOf: [string, number]`, producing
//   `string | numberFromJSON(...)`. Primitives need no (de)serialization, so just
//   pass the raw value through.

const fs = require('fs');

const filePath = process.argv[2];
if (!filePath) {
  process.exit(0);
}

const original = fs.readFileSync(filePath, 'utf8');

const patched = original
  .replace(
    "mapValues(json['decisions'], Decision | DecisionArrayFromJSON)",
    "mapValues(json['decisions'], (v: any) => Array.isArray(v) ? v.map(DecisionFromJSON) : DecisionFromJSON(v))"
  )
  .replace(
    'mapValues(value.decisions, Decision | DecisionArrayToJSON)',
    'mapValues(value.decisions, (v: any) => Array.isArray(v) ? v.map(DecisionToJSON) : DecisionToJSON(v))'
  )
  .replace(
    "string | numberFromJSON(json['eq'])",
    "json['eq']"
  )
  .replace(
    'string | numberToJSON(value.eq)',
    'value.eq'
  );

if (patched !== original) {
  fs.writeFileSync(filePath, patched);
}
