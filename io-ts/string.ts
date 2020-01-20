import * as t from 'io-ts'
import { isRight } from 'fp-ts/lib/Either'
// A value of type Type<A, O, I> (called "codec") is the runtime representation of the static type A.

// A codec can:

// decode inputs of type I (through decode)
// encode outputs of type O (through encode)
// be used as a custom type guard (through is)
// class Type<A, O, I> {
//     constructor(
//       /** a unique name for this codec */
//       readonly name: string,
  
//       /** a custom type guard */
//       readonly is: (u: unknown) => u is A,
  
//       /** succeeds if a value of type I can be decoded to a value of type A */
//       readonly validate: (input: I, context: Context) => Either<Errors, A>,
  
//       /** converts a value of type A to a value of type O */
//       readonly encode: (a: A) => O
//     ) {}
  
//     /** a version of `validate` with a default context */
//     decode(i: I): Either<Errors, A>
// }

// const string = new t.Type<number, string, unknown>(
//   'string',
//   (input: unknown): input is number => {
//     //typeof input === 'string'
//     console.log(input)
//     return false
//   },
//   // `t.success` and `t.failure` are helpers used to build `Either` instances
//   (input, context) => (typeof input === 'number' ? t.success(input) : t.failure(input, context)),
//   // `A` and `O` are the same, so `encode` is just the identity function
//   (a: number) => a.toString()
// )


const string = new t.Type<string, string, unknown>(
  'string',
  (input: unknown): input is string => typeof input === 'string',
  // `t.success` and `t.failure` are helpers used to build `Either` instances
  (input, context) => (typeof input === 'string' ? t.success(input) : t.failure(input, context)),
  // `A` and `O` are the same, so `encode` is just the identity function
  t.identity
)

let a = isRight(string.decode('a string')) // true
console.log(a)

let b = isRight(string.decode(null)) // false
console.log(b)