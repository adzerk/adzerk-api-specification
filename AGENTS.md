# AGENTS.md

## Post Change Instructions

- Update the [CHANGELOG.md](./CHANGELOG.md) with details of the change made, why and by whom.
- Decision Specification
  - npm run validate-decision (openapi-generator-cli validate)
  - (MINUS THE PUBLISH STEPS) Run the steps in [publish workflow](./.github/workflows/publish-decision-spec-packages.yml).
- Management Specification
  - Validate the formatting of the [Management Specification](./management/).
  - Use the `Swagger Merger Check` detailed below.

### Swagger Merger Check

We can check for mistakes, including dangling undefined references by the `swagger-merger` utility.

```bash
# Working directory is `adzerk-api-specification` project folder.
npm install --global swagger-merger
swagger-merger --help
swagger-merger --input ./management/openapi-3.yaml --output ./openapi-3.merged.yaml
# Inspect `./openapi-3.merged.yaml
# Overall format against openapi-3 specification.
# Dangling references check: Doing a search for `$ref` should yeild no results. The presence of $ref is a failure that should be resolved.
```
