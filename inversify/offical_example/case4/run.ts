import { myContainer } from "./inversify.config";
import { Weapon } from './interfaces';
const one = myContainer.getNamed<Weapon>(Weapon, "japanese");
console.log(one.name)

const two = myContainer.getNamed<Weapon>(Weapon, "chinese");
console.log(two.name)