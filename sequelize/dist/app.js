"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
const sequelize_typescript_1 = require("sequelize-typescript");
const instance = new sequelize_typescript_1.Sequelize({
    dialect: 'postgres',
    database: 'test',
    username: 'mzgdev',
    password: 'thu2!iNM8aXXgBR',
    host: '127.0.0.1',
    port: 5432
});
instance.addModels([person_1.Person]);
(async () => {
    await instance.sync({ force: false });
    // await Person.create({
    //     name: '张三',
    //     age: 2
    // })
    // let [count] = await Person.update({
    //     name: null,
    //     age: 9
    // }, {
    //     where: {
    //         id: 1
    //     },
    //     returning: false
    // })
    // console.log(count)
    let count = await person_1.Person.destroy({
        where: {
            id: 101
        }
    });
    console.log(count);
    // let id = [1,2,3,4,5,6,7];
    // let result = await Person.findAll({
    //     raw: true,
    //     where: {
    //         id: id
    //     }
    // })
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
})();
// console.log(Person.options)
// console.log(Object.keys(Person))
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUErQjtBQUMvQiwrREFBZ0Q7QUFFaEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxnQ0FBUyxDQUFDO0lBQzNCLE9BQU8sRUFBRSxVQUFVO0lBQ25CLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFFBQVEsRUFBRSxpQkFBaUI7SUFDM0IsSUFBSSxFQUFFLFdBQVc7SUFDakIsSUFBSSxFQUFFLElBQUk7Q0FDYixDQUFDLENBQUE7QUFDRixRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsZUFBTSxDQUFDLENBQUMsQ0FBQztBQUU3QixDQUFDLEtBQUssSUFBRyxFQUFFO0lBQ1AsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7SUFDbkMsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsS0FBSztJQUNMLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLE9BQU87SUFDUCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsS0FBSztJQUNMLHFCQUFxQjtJQUNyQixJQUFJLEtBQUssR0FBRyxNQUFNLGVBQU0sQ0FBQyxPQUFPLENBQUM7UUFDN0IsS0FBSyxFQUFFO1lBQ0gsRUFBRSxFQUFFLEdBQUc7U0FDVjtLQUNKLENBQUMsQ0FBQTtJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDbEIsNEJBQTRCO0lBQzVCLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsS0FBSztJQUNMLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxNQUFNO0lBQ04sYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsTUFBTTtJQUNOLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLE1BQU07SUFDTixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLE1BQU07SUFDTixpREFBaUQ7SUFDakQsa0RBQWtEO0lBQ2xELHdDQUF3QztJQUN4Qyx5Q0FBeUM7SUFDekMseUJBQXlCO0lBQ3pCLEtBQUs7SUFFTCxzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsZUFBZTtJQUNmLEtBQUs7SUFDTCwyQ0FBMkM7QUFDL0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtBQUNKLDhCQUE4QjtBQUM5QixtQ0FBbUMifQ==