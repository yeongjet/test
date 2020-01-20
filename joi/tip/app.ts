import { ta } from './tip';

const result = ta(['required']).ts(['min', 'max'])
console.log(result.toString())