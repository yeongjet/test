import { Person } from './person'
import { FindOptions, Op } from 'sequelize'
import { Sequelize } from 'sequelize-typescript'
import { Student } from './student'
import * as UUID from 'uuid'

interface _FindOptions extends FindOptions {
    partion: string
}

const operatorsAliases = {
    $eq: Op.eq,
    $ne: Op.ne,
    $gte: Op.gte,
    $gt: Op.gt,
    $lte: Op.lte,
    $lt: Op.lt,
    $not: Op.not,
    $in: Op.in,
    $notIn: Op.notIn,
    $is: Op.is,
    $like: Op.like,
    $notLike: Op.notLike,
    $iLike: Op.iLike,
    $notILike: Op.notILike,
    $regexp: Op.regexp,
    $notRegexp: Op.notRegexp,
    $iRegexp: Op.iRegexp,
    $notIRegexp: Op.notIRegexp,
    $between: Op.between,
    $notBetween: Op.notBetween,
    $overlap: Op.overlap,
    $contains: Op.contains,
    $contained: Op.contained,
    $adjacent: Op.adjacent,
    $strictLeft: Op.strictLeft,
    $strictRight: Op.strictRight,
    $noExtendRight: Op.noExtendRight,
    $noExtendLeft: Op.noExtendLeft,
    $and: Op.and,
    $or: Op.or,
    $any: Op.any,
    $all: Op.all,
    $values: Op.values,
    $col: Op.col
  };

const instance = new Sequelize({
    dialect: 'postgres',
    database: 'test',
    username: 'mzgdev',
    password: 'thu2!iNM8aXXgBR',
    host: '127.0.0.1',
    port: 5432,
    operatorsAliases
})
instance.addModels([Person, Student]);

(async() => {
    await instance.sync({force: false})
    // await Person.create({
    //     name: '张三',
    //     age: 2
    // })
    // const person = await Person.findOne({
    //     where: {
    //         age: 2
    //     },
    //     partion: '2'
    // } as _FindOptions)
    // if (person) {
    //     console.log(person.toJSON())
    // }
    // for(let i = 0; i < 600; i++){
    //     await Student.create({
    //         name: UUID.v4()
    //     })
    // }

    const studentList = await Student.findAll({
        raw: true,
        where: {
            name: {
                $like: '%ba%'
            }
        }
    })
    console.log(studentList)
    await instance.close();
})()
// console.log(Person.options)
// console.log(Object.keys(Person))