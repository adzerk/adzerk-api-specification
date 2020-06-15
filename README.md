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

## Sample Invocations

### Decision SDK

All of the following commands are meant to be run from within their respective language-specific SDK repositories. In the future, there will be a way to trigger those updates from this repository.

#### JavaScript

The JavaScript generator is currently the only special case. We specificially route all of the generated code to the `generated` folder so that it's clear exactly what is generated and what isn't.

```sh
$ openapi-generator generate \
    -i ~/projects/adzerk/api-swagger-spec/decision/openapi-3.yaml \
    -g typescript-fetch \
    -o ./src/generated/ \
    -c ~/projects/adzerk/api-swagger-spec/decision/codegen-config/typescript-fetch.json
```

#### Java

```sh
$ openapi-generator generate \
    -i ~/projects/adzerk/api-swagger-spec/decision/openapi-3.yaml \
    -g java \
    -c ~/projects/adzerk/api-swagger-spec/decision/codegen-config/java.json
```

#### Ruby

```sh
$ openapi-generator generate \
    -g ruby \
    -i ../api-swagger-spec/decision/openapi-3.yaml \
    -o ./ \
    -c ../api-swagger-spec/decision/codegen-config/ruby.json
```

#### Python

```sh
$ openapi-generator generate \
    -g python \
    -i ../api-swagger-spec/decision/openapi-3.yaml \
    -o ./ \
    -c ../api-swagger-spec/decision/codegen-config/python.json
```

### Management SDK

#### Ruby

```sh
$ openapi-generator generate \
    -g ruby \
    -i ../api-swagger-spec/management/openapi-3.yaml \
    -o ./ \
    --c ../api-swagger-spec/management/codegen-config/ruby.json
```