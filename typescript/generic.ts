import _ from 'lodash'

function map(): <V>(arr: V[]) => V[];
function map<V, R>(fn: (value: V) => R): (arr: V[]) => R[];
function map(fn = (x: any) => x) {
  return (arr: any[]) => {
    const result: any[] = [];
    for (const item of arr) {
      result.push(fn(item));
    }
    return result;
  };
}

const emptyMap = map();
const result1 = emptyMap([1, 2, 3]);
const result2 = emptyMap(["1", "2"]);

const mapNumberToString = map((v: number) => "str");
const result3 = mapNumberToString([1, 2, 3]);


interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentityNumber: GenericIdentityFn<number> = identity;
let myIdentityString: GenericIdentityFn<string> = identity;
const gaweg = myIdentityNumber(1)
const gawegsd = myIdentityString('gsergesrgs')


interface Person {
  name: string
}

interface Person {
  age: number
}

const fsdf: Person[] = [{
  name: 'gawe',
  age: 12
}]

const ksdf: Person = {
  name: 'gawe',
  age: 12
}


const asdf = {0: ksdf, 1: ksdf, length: 1}

const sp = _.map(fsdf, n => {
  return n
})

const shgh = _.map(fsdf)

const shgdh = _.map(fsdf, 'gersgre')
const hhgdh = _.map(fsdf, {name:'greg'})

const opop = _.map([1,{nawe:'fwae'}, null])

const gserg = _.map(fsdf)
const xcv = _.map(fsdf)

// let findAlls:(name:string,age:number) => number;

function findAll(salesmanId: number, order?: number): number;
function findAll(salesmanId: number[], order?: number): object;
function findAll(salesmanId: number, attribute: string, order?: number): string;
function findAll(salesmanId: number[], attribute: string, order?: number): number[];
function findAll(salesmanId: any, attribute: any = 9, order: number = 2): any {
  console.log(`salesmanId:${salesmanId}, attribute:${attribute}, order:${order}`)
}
let gr = findAll([1], 1)
let jk = findAll([1], 'w', 1)
let li = findAll([1], 's')
let gaz = findAll(1, 's')
console.log(gr)
console.log(jk)
console.log(li)
console.log(gaz)


// function findAll(salesmanId: number, order?: number): number;
// function findAll(salesmanId: number[], order?: Order<Salesman>): number;
// function findAll(salesmanId: number, attribute: Attribute, order?: Order<Salesman>): number;
// function findAll(salesmanId: number[], attribute: Attribute, order?: Order<Salesman>): number;
// function findAll(salesmanId: any, attribute?: any): any {

// }

// let ahty:{name: string, age?: number} = {name: '123', age: 98}

// const { age = 12, name } = ahty

// console.log(age)
// console.log(name)

let ahty: any = {}

const { age = 12, name = 'grspgijoiser' } = ahty

console.log(age)
console.log(name)

function jytu (a, b: any = {}) {
  console.log(b)
  return b.s;
}

jytu('hgsergh')