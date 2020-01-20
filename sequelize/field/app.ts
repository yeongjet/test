import { Person } from './person'
import { Sequelize } from 'sequelize-typescript'
import * as _ from 'lodash'

const instance = new Sequelize({
  dialect: 'postgres',
  database: 'test',
  username: 'mzgdev',
  password: 'thu2!iNM8aXXgBR',
  host: '127.0.0.1',
  port: 5432,
  define: {
    underscored: true
  }
})
instance.addModels([Person]);

(async() => {
  await instance.sync({alter: true})
  const model = await Person.create({
      nameSub: '张三',
      ageSub: 2
  })
  await instance.close();
})();