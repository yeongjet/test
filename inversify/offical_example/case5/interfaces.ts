// 定义服务对象标识
export const Warrior = Symbol.for('Warrior');
export const Weapon = Symbol.for('Weapon');
export const ThrowableWeapon = Symbol.for('ThrowableWeapon');

export interface Weapon {
    name: string;
}