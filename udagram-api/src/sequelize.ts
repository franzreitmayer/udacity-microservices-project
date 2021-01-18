import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';

console.log("Configuration before creating sequelize object");
console.log(JSON.stringify(config));

export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,
  'dialect': config.dialect,
  'storage': ':memory:',
});

