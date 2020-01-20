import { injectable, inject } from "inversify";
import "reflect-metadata";

@injectable()
export class Katana {
  public name = 'katana'
}

@injectable()
export class Shuriken {
  public name = 'shuriken'
}

