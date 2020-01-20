import * as _ from 'lodash'
import { Person } from './person'
const __ :typeof _ & {
  isNotEmpty: (n: any) => boolean
} = Object.assign(_, {isNotEmpty: (n?: any) => !_.isEmpty(n)})

// {
//   ..._,
//   isNotEmpty: n => !_.isEmpty(n)
// }
// _['isNotEmpty'] = n => !_.isEmpty(n)
const parm: any = {
  storeId: 3,
  cellphone: '2341231231',
  beginTime: 'opjjoi'
}

const queryOption = {
  storeId: [_.isNumber, parm.storeId],
  cellphone: [__.isNotEmpty, parm.cellphone],
  beginTime: [__.isNotEmpty, parm.beginTime],
  endTime: [__.isNotEmpty, parm.endTime],
};

const where: any = {}

_.map(parm, (value, key) => queryOption[key][0](value) && (where[key] = queryOption[key][1]));

where.create_at = {$between: [where.beginTime, where.endTime]}

console.log(where)