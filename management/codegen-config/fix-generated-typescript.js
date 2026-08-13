#!/usr/bin/env node
'use strict';

// openapi-generator's typescript-fetch templates build (de)serializer calls by
// concatenating the property's raw TS type with "FromJSON"/"ToJSON". For a plain
// $ref that works (e.g. CreativeFromJSON), but CreativeTemplateUpdateOperation's
// `Path` is `oneOf: [string, array of (string|integer)]`, so the generator emits
// the type text itself (HTML-escaped, e.g. "string | Array&lt;string | number&gt;")
// glued to the suffix, producing invalid TypeScript. Since every branch is a
// primitive (no nested (de)serialization needed), pass the raw value through.

const fs = require('fs');

const filePath = process.argv[2];
if (!filePath) {
  process.exit(0);
}

const original = fs.readFileSync(filePath, 'utf8');

const patched = original
  .replace(
    "string | Array&lt;string | number&gt;FromJSON(json['Path'])",
    "json['Path']"
  )
  .replace(
    'string | Array&lt;string | number&gt;ToJSON(value.path)',
    'value.path'
  );

if (patched !== original) {
  fs.writeFileSync(filePath, patched);
}
