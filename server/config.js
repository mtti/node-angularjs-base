import Sequelize from 'sequelize';

const port = process.env.PORT || 3000;
const dbUri = process.env.DATABASE_URL || 'postgres://developer:password@localhost:5432/database';

const sequelize = new Sequelize(dbUri);

const config = {
  sequelize,
  port,
};

export default config;
