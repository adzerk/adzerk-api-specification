#!/usr/bin/env node
'use strict';

// openapi-generator's typescript-fetch templates build map (de)serializer calls by
// concatenating the property's raw TS type with "FromJSON"/"ToJSON". For a plain
// $ref that works (e.g. DecisionFromJSON), but DecisionResponse's `decisions` map
// value is `oneOf: [Decision, DecisionArray]`, so the generator emits the type text
// itself ("Decision | DecisionArray") glued to the suffix, producing invalid
// TypeScript: `Decision | DecisionArrayFromJSON`. Rewrite it to a real dispatcher.

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
  );

if (patched !== original) {
  fs.writeFileSync(filePath, patched);
}
