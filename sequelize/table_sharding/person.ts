import {
  Model,
  Column,
  AllowNull,
  Comment,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Table,
  BeforeCreate,
  BeforeFind,
  BeforeBulkCreate,
  BeforeUpdate
} from 'sequelize-typescript';
import * as _ from 'lodash';

@Table({
  tableName: 'person'
})
export class Person extends Model<Person> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.JSONB)
  name: string

  @Comment('分类设置')
  @AllowNull(false)
  @Column(DataType.JSONB)
  age: number

  @BeforeCreate({name: 'beforeCreateHook'})
  @BeforeBulkCreate({name: 'beforeBulkCreateHook'})
  @BeforeUpdate({name: 'beforeUpdateHook'})
  static beforeCreateHooks(instance: Person, options: any) {
    _.set(instance.sequelize.models.Person, 'tableName', 'person1');
    console.log('----------options------------');
    console.log(options);
  }
  
  @BeforeFind({name: 'beforeFindHook'})
  static beforeFindHook(options: any) {
    _.set(this, 'tableName', `${this.tableName}${options.partion}`)
    console.log('----------options------------');
    console.log(options);
  }
}