import {
    Model,
    Column,
    AllowNull,
    Comment,
    DataType,
    PrimaryKey,
    AutoIncrement,
    Table
  } from 'sequelize-typescript';
  
  @Table({
    tableName: 'people2'
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
  }
  