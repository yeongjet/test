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
    tableName: 'people6'
  })
  export class Person extends Model<Person> {
  
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;
  
    @AllowNull(true)
    @Column({type: DataType.JSONB, field: 'name_subs'})
    nameSub: string
  
    @AllowNull(true)
    @Column({type: DataType.JSONB, field: 'age_sub'})
    ageSub: number

    @AllowNull(true)
    @Column({type: DataType.TEXT, field: 'department_subs', unique: true})
    department: number

    @AllowNull(true)
    @Comment('gawegweag')
    @Column({type: DataType.TEXT, field: 'ffae', unique: true})
    pot: number
  }
  