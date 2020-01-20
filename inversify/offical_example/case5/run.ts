import { myContainer } from "./inversify.config";
import { Weapon } from './interfaces';

const one = myContainer.getAll<Weapon>(Weapon)
console.log(one)
