export const EnvConfiguration = () => ({
  environment: process.env.STAGE || 'DEV',
  db_password: process.env.DB_PASSWORD,
  db_name: process.env.DB_NAME,
  db_username: process.env.DB_USERNAME,
  db_host: process.env.DB_HOST,
  db_port: +process.env.DB_PORT,
  port: +process.env.PORT || 3001,
  jwt_secret: process.env.JWT_SECRET,
});
