// let a:{
//     name: string,
//     age?: {
//         bo?: string,
//         po: number
//     }
// } = {name: 'zhangsan'}
// let c: any = null
// let b = c.age.po
// console.log(b)

const abf = (name: string, age:string[] = ['po']) => {
    console.log(age)
}

abf('name')