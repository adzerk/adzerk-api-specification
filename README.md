## Install Instructions

Can use either NPM or Brew (mac) to install:

```sh
$ npm install @openapitools/openapi-generator-cli -g
```

or

```sh
$ brew install openapi-generator
```

If you have issues or need upgrade instructions, please visit https://openapi-generator.tech/docs/installation/.

## Releasing

There are two GHA that will complete publishing both Management SDK and Decision SDK.
In order to trigger them a new `release` has to be created on GH releases [page](https://github.com/adzerk/adzerk-api-specification/releases).
`Draft a new release` and enter the new release tag or pick if from the list of existing tags, target to `master` and `Generate release notes` before hitting `Publish release`.
Validate on the GH actions [page](https://github.com/adzerk/adzerk-api-specification/actions) that the workflows executed successfully.

## Sample Invocations

### Decision SDK

All of the following commands are meant to be run from within their respective language-specific SDK repositories. In the future, there will be a way to trigger those updates from this repository.

#### JavaScript

The JavaScript generator is currently the only special case. We specificially route all of the generated code to the `generated` folder so that it's clear exactly what is generated and what isn't.

```sh
$ openapi-generator generate \
    -i ./decision/openapi-3.yaml \
    -g typescript-fetch \
    -o ./build/decision-js/ \
    -c ./decision/codegen-config/typescript-fetch.json
```

#### Java

```sh
$ openapi-generator generate \
    -i ./decision/openapi-3.yaml \
    -g java \
    -o ./build/decision-java/ \
    -c ./decision/codegen-config/java.json
```

#### Ruby

```sh
$ openapi-generator generate \
    -g ruby \
    -i ./decision/openapi-3.yaml \
    -o ./build/decision-ruby/ \
    -c ./decision/codegen-config/ruby.json
```

#### Python

```sh
$ openapi-generator generate \
    -g python \
    -i ./decision/openapi-3.yaml \
    -o ./build/decision-python/ \
    -c ./decision/codegen-config/python.json
```

### Management SDK

Note to maintainers: The openapi-3.yaml file doesn't fully reference all of the
endpoints and schemas in the individual entity YAML files. For this reason, please make
sure to update both the individual entity YAML file AND the openapi-3.yaml file when
making changes. Bonus points for linking the 2 with `$ref` so that there is only one
place to make changes.

#### JavaScript

```sh
$ openapi-generator generate \
    -i ./management/openapi-3.yaml \
    -g typescript-fetch \
    -o ./build/mgmt-js/ \
    -c ./management/codegen-config/typescript-fetch.json
```

#### Ruby

```sh
$ openapi-generator generate \
    -g ruby \
    -i ./management/openapi-3.yaml \
    -o ./build/mgmt-ruby/ \
    -c ./management/codegen-config/ruby.json
```
