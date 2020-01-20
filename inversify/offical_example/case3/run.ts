import { myContainer } from "./inversify.config";
import { Ninja } from "./weapon";
console.log(myContainer.isBound(Ninja))
const ninja = myContainer.get(Ninja);
console.log(myContainer.isBound(Ninja))
let res = ninja.fight()
console.log(res)
res = ninja.sneak()
console.log(res)