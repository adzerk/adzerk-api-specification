# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.13] - 2023-11-13

### Added

- [sc-48713] Added specs for Entity Counts. By [@ryuichis](https://github.com/ryuichis).
- [sc-49435] Added specs for Create Nested Campaign. By [@vkurup](https://github.com/vkurup).

## [1.0.12] - 2023-08-29

### Fixed

- [sc-49448] Updated Typescript compiler options to fix [breaking change](https://devblogs.microsoft.com/typescript/announcing-typescript-5-2-rc/#module-and-moduleresolution-must-match-under-recent-node-js-settings) between `v5.1.x` to `v5.2.x`. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- [sc-49448] Removed unnecessary instances of `[sc-48140]` from `CHANGELOG.md`. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

### Changed

- [sc-49448] Fixed Typescript compiler version to `v5.2.x`. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

## [1.0.11] - 2023-08-29

### Added

- [sc-33985] Added an `includeArchived` option to the List Creative Templates endpoint for listing archived creative templates. By [@ryuichis](https://github.com/ryuichis).

## [1.0.10] - 2023-08-15

### Fixed

- [sc-48140] Targeting Javascript `ES5` instead of `ES6` for compatability. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- [sc-48140] Fixed clean script. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

## [1.0.9] - 2023-08-15

### Nothing

- Problem with deploy due to GITHUB_REF_NAME, so republished. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

## [1.0.8] - 2023-08-15

### Fixed

- [sc-48140] Added `npm publish` option `--access=public` to permit publish to public npm registry and not receive `You must sign up for private packages` due to scoped packages [being `restricted` by default](https://docs.npmjs.com/cli/v8/commands/npm-publish#access). By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

## [1.0.7] - 2023-08-15

### Fixed

- [sc-48140] Typescript stage in publish workflow to target the correct version of Javascript. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

### Changed

- [sc-48140] Updated build directory for generated assets. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- [sc-48140] Removed `--dry-run` option from `npm publish` so that package is uploaded to registries. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

### Added

- [sc-48140] Setup of Java stage as it is needed by generator when testing. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- [sc-48140] Entries to `.gitignore` to assist testing of workflows. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).
- [sc-48140] Added work card ids to changelog for tracking. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

## [1.0.6] - 2023-08-14

### Added

- [sc-48140] Debug statement to workflow. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

## [1.0.5] - 2023-08-14

### Fixed

- [sc-48140] Typescript compiler error by fixing to version `5.x` on install. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

## [1.0.4] - 2023-08-14

### Fixed

- [sc-48140] GitHub Actions working directory references `publish-decision-spec-packages.yml`. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

## [1.0.3] - 2023-08-14

### Fixed

- [sc-48140] `package-lock.json` file as prior one didn't work with `npm clean-install`. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

### Changed

- [sc-48140] `package.json` file version to latest released. By [@honeycomb-cheesecake](https://github.com/honeycomb-cheesecake).

## [1.0.2] - 2023-08-14

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
