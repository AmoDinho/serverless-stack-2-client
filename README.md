# Serverless Stack Demo React App

[Serverless Stack](http://serverless-stack.com) is a free comprehensive guide to creating full-stack serverless applications. We create a [note taking app](http://demo.serverless-stack.com) from scratch.

This repo is for the frontend React app that we build over the course of the tutorial. You can find the repo for the backend serverless API [here](https://github.com/AnomalyInnovations/serverless-stack-demo-api). And the repo for the tutorial [here](https://github.com/AnomalyInnovations/serverless-stack-com).

#### Steps

To support the different chapters and steps of the tutorial; we use branches to represent the project codebase at the various points. Here is an index of the various chapters and branches in order.

- [Configure AWS Amplify](../../tree/configure-aws-amplify)
- [Give Feedback While Logging In](../../tree/give-feedback-while-logging-in)
- [Signup with AWS Cognito](../../tree/signup-with-aws-cognito)
- [Upload a File to S3](../../tree/upload-a-file-to-s3)
- [Call the List API](../../tree/call-the-list-api)
- [Delete a Note](../../tree/delete-a-note)
- [Redirect on Login](../../tree/redirect-on-login)
- [Code Splitting in Create React App](../../tree/code-splitting-in-create-react-app)

#### Usage

This project is created using [Create React App](https://github.com/facebookincubator/create-react-app).

To use this repo locally, start by cloning it and installing the NPM packages.

``` bash
$ git clone https://github.com/AnomalyInnovations/serverless-stack-demo-client
$ npm install
```

Run it locally.

``` bash
$ npm run start
```

To deploy, replace the following in the [`package.json`](package.json) with your S3 bucket and CloudFront distributions.

```
"deploy": "aws s3 sync build/ s3://notes-app-client",
"postdeploy": "aws cloudfront create-invalidation --distribution-id E1KTCKT9SOAHBW --paths '/*' && aws cloudfront create-invalidation --distribution-id E3MQXGQ47VCJB0 --paths '/*'",
```

And run.

``` bash
$ npm run deploy
```

``` 
REACT_APP_STAGE=prod npm run build
```


