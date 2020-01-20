import { Person } from './person'
import { Op } from 'sequelize'
import { Sequelize } from 'sequelize-typescript'
import { RedpackActivity } from './redpack-activity.model';

const instance = new Sequelize({
    dialect: 'postgres',
    database: 'test',
    username: 'mzgdev',
    password: 'thu2!iNM8aXXgBR',
    host: '127.0.0.1',
    port: 5432,
    define: {
      timestamps: true,
      underscored: true
    }
})
instance.addModels([Person]);

(async() => {

    await instance.sync({force: true})
    const newly = await Person.create({
      id: 1,
      name: 'gaweg',
      age: 12,
      departmentNo: 1
    })
    console.log(newly.toJSON())
    console.log(newly.createdAt)

    //const where = { created_at: { [Op.gt]: '2019-12-26T10:30:03.688Z' } }
    // const where = { created_at: { $between: ['2019-10-26T10:30:03.688Z', '2019-12-26T10:30:03.688Z'] } }
    const s = await Person.findAll({
      where: {
        createdAt: {
          [Op.lt]: new Date(),
          [Op.gt]: new Date('2019-12-26T10:30:03.688Z')
        }
      }
    })
    console.log(s)
    await instance.close()

})()
// console.log(Person.options)
// console.log(Object.keys(Person))