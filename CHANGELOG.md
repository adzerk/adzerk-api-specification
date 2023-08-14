# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- `package-lock.json` file as prior one didn't work with `npm clean-install`. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

### Changed

- `package.json` file version to latest released. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

[1.0.2] - 2023-08-14

### Changed

- Updated `@openapitools/openapi-generator-cli` to latest. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- Updated `generator-cli` version. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

### Added

- This `CHANGELOG.md` file to track changes. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- Schema definition for `SkipFilters` in `decision/openapi-3.yaml`. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- `SkipFilters` parameter to Placement object in non-breaking, optional manner. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- Base information to project `package.json`. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- NPM build scripts to `package.json` for both the decision and management specifications. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- CI/CD workflow that allows for Typescript implementation of the api spec to be deployed as a package to a npm registry (currently a dry-run). By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
