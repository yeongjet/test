import { Person } from '../where/person'
import { Sequelize } from 'sequelize-typescript'
import * as _ from 'lodash'

const instance = new Sequelize({
    dialect: 'postgres',
    database: 'test',
    username: 'mzgdev',
    password: 'thu2!iNM8aXXgBR',
    host: '127.0.0.1',
    port: 5432
})
instance.addModels([Person]);

(async() => {

        await instance.sync({force: false})
        let model = await Person.create({
            name: '张三',
            ageB: 2
        })
        console.log(model)
        console.log(_.pick(model, ['_options']))

    // let [count, data] = await Person.update({
    //     name: 'agwe',
    //     age: 9
    // }, {
    //     where: {
    //         id: [28,27,26,25]
    //     },
    //     returning: true
    // })
    // console.log(count)
    // console.log(data.map(n => n.toJSON()))                    
    // Person.bulkCreate([{name:'3gdrg', age:12}], {
    //     updateOnDuplicate
    // })
    // let count = await Person.destroy({
    //     where: {
    //         id: [],
    //         age: 2
    //     }
    // })
    // console.log(count)
    // let id = [1,2,3,4,5,6,7];

    // let result = await Person.findOne({
    //     raw: true,
    //     attributes: ['ageB'],
    //     where: {
    //         id: 1
    //     },
    //     order: undefined
    // })
    // if (result){
    //     console.log(result)
    // }

    // let persons = [{
    //     id: 1,
    //     name: '98',
    //     age: 67
    // },{
    //     id: 2,
    //     name: 'abc',
    //     age: 12
    // },{
    //     id: 99,
    //     name: 'nms',
    //     age: 18
    // },{
    //     name: '4nms',
    //     age: 18
    // }];
    // console.log(Object.keys(Person.rawAttributes))
    // let result = await Person.bulkCreate(persons, {
    //     // fields: ['id', 'age', 'name'],
    //     updateOnDuplicate: ['id', 'name'],
    //     // returning: true
    // })
    
    // let result = await Person.findAll({
    //     where: {
    //         id: [2,3],
    //     },
    //     limit: 1
    // })
    // console.log(result.map(n => n.toJSON()))
})()
// console.log(Person.options)
// console.log(Object.keys(Person))