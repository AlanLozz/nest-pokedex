export const EnvConfiguration = () => ({
  enviroment: process.env.NODE_ENV || 'dev',
  mongoUri: process.env.MONGO_URI,
  port: process.env.PORT || 5000,
  defaultLimit: process.env.DEFAULT_LIMIT || 5,
})
