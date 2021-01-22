# Demo 

## Running locally

* Aet up your environment variables.
  * `cp .env.example .env.development`
  * edit your newly created `.env*` file to add the real values for the variables
* Install the dependencies.
  * `npm install`
* Run it locally.
  * `npm run-script dev:offline`

## Environment Variables

| Variable Name             | Purpose                           | Example Value       |
|---------------------------|-----------------------------------|---------------------|
|AWS_PROFILE                | To deploy to the correct          |                     |
|HTTP_PORT                  | HTTP port number for serverless-offline | 4000          |
|LAMBDA_PORT                | Direct invokation lambda port for serverless-offline | 4002 |
|NODE_ENV                   | NODE environment                    | production        |
|REGION                     | The AWS Region to deploy the app    | us-east-1         |
|STAGE                      | Default lambda stage name           | dev               |
|TEST_URI                   | Service example URI                 | https://1234567890.execute-api.us-east-1.amazonaws.com/dev/test |
|TEST_STATUS                | Service example response status code | 200              |
|TEST_MESSAGE               | Service example response ;essage     | Ok               |
|WEBSOCKET_PORT             | WS port number for serverless-offline | 3001            |
