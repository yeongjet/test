import {
  Model,
  Column,
  AllowNull,
  DataType,
  Table,
  PrimaryKey,
  AutoIncrement
} from 'sequelize-typescript';

@Table({
  tableName: 'student',
  timestamps: false
})
export class Student extends Model<Student> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string
}