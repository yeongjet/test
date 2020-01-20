import { myContainer } from "./inversify.config";
import { Warrior } from "./interfaces";

const ninja = myContainer.get<Warrior>(Warrior);

let res = ninja.fight()
console.log(res)
res = ninja.sneak()
console.log(res)