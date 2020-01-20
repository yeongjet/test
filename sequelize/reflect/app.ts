import { Person } from './person'
import * as _ from 'lodash'
import { Sequelize, Model } from 'sequelize-typescript'
import snakecaseKeys from 'snakecase-keys'
// import 'reflect-metadata'
// const instance = new Sequelize({
//   dialect: 'postgres',
//   database: 'test',
//   username: 'mzgdev',
//   password: 'thu2!iNM8aXXgBR',
//   host: '127.0.0.1',
//   port: 5432,
//   define: {
//     underscored: true
//   }
// })
// instance.addModels([Person]);
console.log('hello')

const keys = Reflect.getOwnMetadataKeys(Person.prototype)
console.log(keys)

const attributes = Reflect.getMetadata('sequelize:attributes', Person.prototype)
console.log(attributes)

_.map(attributes, n => {
  console.log(n.type)
})

// var proxy = new Proxy(Person, {
//   get: function(target, property) {
//     return 35;
//   }
// });

// const res = Object.keys(attributes).reduce( (copy, key) => {
//   copy[key] = Object.assign({}, attributes[key]);
//   return copy;
// }, {});
// const options = Reflect.getMetadata('sequelize:options', Person.prototype)
// console.log(options)

const attributess = Reflect.defineMetadata('sequelize:attributes', snakecaseKeys(attributes as any), Person.prototype)
console.log(attributess)

// const attributesss = Reflect.getMetadata('sequelize:attributes', Person.prototype)
// console.log(attributesss)
