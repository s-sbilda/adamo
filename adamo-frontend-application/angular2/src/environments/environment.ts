
export const environment = {
  PROJECTNAME: 'kip',
  production: false,
  NODE_ENV: 'development',
  SERVER_HOST: 'http://localhost',
  SERVER_PORT: 3330,
  MQTT_HOST: 'mqtt://localhost',
  MQTT_PORT: 4711,
  DB_HOST: 'postgres',
  DB_NAME: 'ipim',
  DB_USER: 'postgres',
  DB_PASSWORD: 'postgres',
  DB_PORT: 5432,
  DATA_SAVE_PATH: './postgres-data',
  POSTGRES_IMAGE_VERSION: '11.1-alpine',
  APP_HOST: 'http://localhost',
  APP_PORT: 8085,
  CAMUNDA_ENGINE_HOST: 'http://localhost:8080/engine-rest/deployment/create'
};
