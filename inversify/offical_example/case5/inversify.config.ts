
import { Container } from "inversify";
import { Warrior, Weapon, ThrowableWeapon } from "./interfaces";
import { Katana, Shuriken } from "./entities";
 
const myContainer = new Container();
myContainer.bind<Weapon>(Weapon).to(Katana);
myContainer.bind<Weapon>(Weapon).to(Shuriken);
export { myContainer };