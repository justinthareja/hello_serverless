<!--
title: 'AWS NodeJS Example'
description: 'This template demonstrates how to deploy a NodeJS function running on AWS Lambda using the traditional Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->


# Serverless Framework AWS NodeJS Example
This template demonstrates how to deploy a NodeJS function running on AWS Lambda using the traditional Serverless Framework. The deployed function does not include any event definitions as well as any kind of persistence (database). For more advanced configurations check out the [examples repo](https://github.com/serverless/examples/) which includes integrations with SQS, DynamoDB or examples of functions that are triggered in `cron`-like manner. For details about configuration of specific `events`, please refer to our [documentation](https://www.serverless.com/framework/docs/providers/aws/events/).

## Usage

### Init
For now node_modules is included in lambda src for to enable pug. Need to figure out how to remove this. Run this just once to generate external dependencies:
```bash
$ npm run init
```

### Build
In order to build and deploy the compiled html, you need to run the following command:

```bash
$ npm run build
```

### Invocation
After successful build, you can invoke the built function by using the following command 
(this will push the latest html to s3 bucket):

```bash
npm run deploy
```

### Local development
You can invoke your function locally by using the following command:

```bash
npx serverless invoke local --function function1
```