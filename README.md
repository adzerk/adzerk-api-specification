## Install Instructions

Can use either NPM or Brew (mac) to install:
https://openapi-generator.tech/docs/installation/

## Sample Invocations

Ruby Decision

```sh
$ cd ../adzerk-decision-sdk-ruby
$ openapi-generator generate -g ruby -i ../api-swagger-spec/decision/openapi-3.yaml -o ./ --config ../api-swagger-spec/decision/codegen-config/ruby.json
```

Ruby Management

```sh
$ cd ../adzerk-management-sdk-ruby
$ openapi-generator generate -g ruby -i ../api-swagger-spec/management/openapi-3.yaml -o ./ --config ../api-swagger-spec/management/codegen-config/ruby.json
```

Java Management

```sh
$ openapi-generator generate -g java -i management/openapi-3.yaml -o ../swagger-codegen-results/management/java --config ./management/codegen-config/java.json
```
