const dev = {
  STRIPE_KEY: "pk_test_IQEA1vOcYdHCZWvmHTZkeTt3",
  s3: {
    REGION: "us-east-1", 
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-7q5rew6kvuw7"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://h7n17rwick.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_xpSvl7StT",
    APP_CLIENT_ID: "2uq6cl8rltlqfn918ekvfh53cr",
    IDENTITY_POOL_ID: "us-east-1:9348af54-1d62-482b-b0da-32062d3d4b5a"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_IQEA1vOcYdHCZWvmHTZkeTt3",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-op3k3cv8k54p"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://816ofmqs9b.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_dY65GfroE",
    APP_CLIENT_ID: "125g15nn4f453mh8ck3aj1tpc0",
    IDENTITY_POOL_ID: "us-east-1:ae6c2dc1-9b42-45d3-8b87-f166f93a33cd"
  }
};


//default to dev if not set 
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  //Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};