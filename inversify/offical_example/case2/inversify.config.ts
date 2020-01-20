
import { Container } from "inversify";
import { Ninja, Katana, Shuriken } from "./weapon";
 
const myContainer = new Container();
myContainer.bind<Ninja>(Ninja).toSelf();
myContainer.bind<Katana>(Katana).toSelf();
myContainer.bind<Shuriken>(Shuriken).toSelf();
 
export { myContainer };