import Sequelize from 'sequelize';
import winston from 'winston';

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

winston.setLevels(winston.config.syslog.levels);
if (env === 'production') {
  winston.level = 'info';
} else {
  winston.level = 'debug';
}

const dbUri = process.env.DATABASE_URL || 'postgres://developer:password@localhost:5432/database';
const sequelize = new Sequelize(dbUri);

const config = {
  env,
  sequelize,
  port,
};

export default config;
