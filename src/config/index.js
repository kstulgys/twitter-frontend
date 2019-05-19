const env = process.env.REACT_APP_NODE_ENV || "dev"

const devConfig = {
  serverUrl: process.env.REACT_APP_SERVER_URL_DEV
}

const prodConfig = {
  serverUrl: process.env.REACT_APP_SERVER_URL_PROD
}

let envConfig = {}

switch (env) {
  case "dev":
  case "development":
    envConfig = devConfig
    break
  case "prod":
  case "production":
    envConfig = prodConfig
    break
  default:
    envConfig = devConfig
}

export default envConfig
