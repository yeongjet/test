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
  
    @AllowNull(true)
    @Column({type: DataType.JSONB, field: 'name_subs'})
    nameSub: string
  
    @Comment('分类设置')
    @AllowNull(true)
    @Column({type: DataType.JSONB, field: 'age_sub'})
    ageSub: number
  }
  