const fs = require('fs');

module.exports = {

  development: {
    username: "mzgdev",
    password: "thu2!iNM8aXXgBR",
    database: "test",
    host: "127.0.0.1",
    dialect: "postgres",
    migrationStorage: "sequelize",
    migrationStorageTableName: "sequelize_meta"
  },
  production: {
    username: "mzgdev",
    password: "thu2!iNM8aXXgBR",
    database: "test",
    host: "127.0.0.1",
    dialect: "postgres",
    migrationStorage: "sequelize",
    migrationStorageTableName: "sequelize_meta"
  }
}