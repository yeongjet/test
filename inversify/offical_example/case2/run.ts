import { myContainer } from "./inversify.config";
import { Ninja } from "./weapon";

const ninja = myContainer.get<Ninja>(Ninja);

let res = ninja.fight()
console.log(res)
res = ninja.sneak()
console.log(res)