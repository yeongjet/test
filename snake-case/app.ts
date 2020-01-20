import { snakeCase } from "snake-case";
import snakecaseKeys from "snakecase-keys";
let a = snakeCase("string"); //=> "string"
let b = snakeCase("dot.case"); //=> "dot_case"
let c = snakeCase("PascalCase"); //=> "pascal_case"
let d = snakeCase("version 1.2.10"); //=> "version_1_2_10"

const pos = [ { id: 1, name: 'gserg', ageB: 1, department_no: 1, 
psdBSsd: { BPfasBsd: 1, POSIDJFPO:23423, aSDFGsdfpsadfg: 23432 } } ]
console.log(snakecaseKeys(pos, { deep: true }))

