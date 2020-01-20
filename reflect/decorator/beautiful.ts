export const Beautifiy = (value: string) => {
  return function(target: Function) {
    Reflect.defineMetadata('personal', value, target);
  };
}