export const SEQUELIZE_OPTIONS = {
  host: String(process.env.SQL_READ_HOST),
  dialect: String(process.env.DB_DIALECT),
  port: String(process.env.SQL_READ_PORT),
  // eslint-disable-next-line no-console
  logging: process.env.LOGGING ? console.info : false,
  benchmark: true,
  pool: {
    max: Number(process.env.POOL_MAX),
    min: Number(process.env.POOL_MIN),
    idle: Number(process.env.POOL_ACQUIRE),
    acquire: Number(process.env.POOL_IDLE)
  }
};
