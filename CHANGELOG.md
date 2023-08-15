# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- [sc-48140] Typescript stage in publish workflow to target the correct version of Javascript. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

### Changed

- [sc-48140] Updated build directory for generated assets. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- [sc-48140] Removed `--dry-run` option from `npm publish` so that package is uploaded to registries. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

### Added

- [sc-48140] Setup of Java stage as it is needed by generator when testing. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- [sc-48140] Entries to `.gitignore` to assist testing of workflows. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- [sc-48140] Added work card ids to changelog for tracking. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

## [1.0.6] - [sc-48140] 2023-08-14

### Added

- [sc-48140] Debug statement to workflow. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

## [1.0.5] - [sc-48140] 2023-08-14

### Fixed

- [sc-48140] Typescript compiler error by fixing to version `5.x` on install. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

## [1.0.4] - [sc-48140] 2023-08-14

### Fixed

- [sc-48140] GitHub Actions working directory references `publish-decision-spec-packages.yml`. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

## [1.0.3] - [sc-48140] 2023-08-14

### Fixed

- [sc-48140] `package-lock.json` file as prior one didn't work with `npm clean-install`. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

### Changed

- [sc-48140] `package.json` file version to latest released. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

[1.0.2] - [sc-48140] 2023-08-14

### Changed

- [sc-48140] Updated `@openapitools/openapi-generator-cli` to latest. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- [sc-48140] Updated `generator-cli` version. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

### Added

- [sc-48140] This `CHANGELOG.md` file to track changes. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- [sc-48140] Schema definition for `SkipFilters` in `decision/openapi-3.yaml`. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- [sc-48140] `SkipFilters` parameter to Placement object in non-breaking, optional manner. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- [sc-48140] Base information to project `package.json`. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- [sc-48140] NPM build scripts to `package.json` for both the decision and management specifications. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- [sc-48140] CI/CD workflow that allows for Typescript implementation of the api spec to be deployed as a package to a npm registry (currently a dry-run). By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
