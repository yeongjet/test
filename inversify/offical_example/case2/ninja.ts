import { injectable } from "inversify";
import { Weapon, ThrowableWeapon, Warrior } from "./interfaces";
import { Katana, Shuriken } from './weapon'
import 'reflect-metadata'

@injectable()
export class Ninja implements Warrior {
  protected katana: Weapon;
  protected shuriken: ThrowableWeapon;

  public constructor(katana: Katana, shuriken: Shuriken) {
    this.katana = katana;
    this.shuriken = shuriken;
  }

  public fight() {
    return this.katana.hit();
  }
  public sneak() {
    return this.shuriken.throw();
  }
}
