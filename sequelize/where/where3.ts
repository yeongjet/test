import * as lodash from 'lodash'
import moment from 'moment'
import { Person } from './person'
import { Sequelize } from 'sequelize-typescript'
import { operatorsAliases } from '../src/operator-alias'
import { snakeCase } from "snake-case";
import snakeCaseKeys from 'snakecase-keys';

const instance = new Sequelize({
  dialect: 'postgres',
  database: 'test',
  username: 'mzgdev',
  password: 'thu2!iNM8aXXgBR',
  host: '127.0.0.1',
  port: 5432,
  operatorsAliases,
  define: {
    timestamps: true,
    underscored: true
  }
})
instance.addModels([Person]);

const _ :typeof lodash & {
  isNotEmpty: (n?: any) => boolean,
  reduceQuery: <T extends object, TResult>(collection: T | null | undefined, factor: {[key: string]: any }, accumulator: TResult) => any
} = Object.assign(lodash,
  {
    isNotEmpty: (n?: any) => !lodash.isEmpty(n)
  }, {
    reduceQuery: (collection, factor, accumulator) => {
      return _.reduce(collection, (last, value, key) => {
          if (factor[key] && factor[key][0] && typeof factor[key][0] === 'function') {
            if (true === factor[key][0](value)) {
              return { [key]: factor[key][1], ...last }
            }
          }
          return last
        },
        accumulator
      );
    }
  })



const companyId = 1

const parm: any = {
  id: 3,
  name: '',
  age: '23',
  agegs: '23',
  beginTime: '2019-05-22T08:20:01.000Z',
  endTime: "2019-012-23T08:20:01.000Z"
}

const option = {
  id: [_.isNumber, parm.id],
  name: [_.isNotEmpty, parm.name],
  age: [_.isNumber, parm.age],
  beginTime: [n => moment(n, moment.ISO_8601).isValid(), new Date(parm.beginTime)],
  endTime: [n => moment(n, moment.ISO_8601).isValid(), new Date(parm.endTime)],
};
console.log(moment('2019-05-22T08:20:01.000Z', moment.ISO_8601).isValid())
const where: any = _.reduceQuery(parm, option, { })
const createdAt =_.pickBy({ $gt: where.beginTime, $lt: where.endTime }, _.isDate)
_.isNotEmpty(createdAt) && (where.createdAt = createdAt)
where.age_b = undefined
console.log(where);

(async() => {
  await instance.sync({force: true})
  const newly = await Person.create({
    name: 'dpofigjodpf',
    age: 13
  })
  console.log(newly.createdAt);
  console.log(newly.toJSON())
  // const result = await Person.findAll({
  //   raw: true,
  //   where
  // });

  await instance.close()
})()

