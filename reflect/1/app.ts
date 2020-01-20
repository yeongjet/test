import { Person } from './person'
import 'reflect-metadata'

const keys = Reflect.getMetadataKeys(Person.prototype)
console.log(keys)

const metadata = Reflect.getMetadata('personal', Person.prototype)
console.log(metadata)