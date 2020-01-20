"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const t = require("io-ts");
const Either_1 = require("fp-ts/lib/Either");
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
const string = new t.Type('string', (input) => typeof input === 'string', 
// `t.success` and `t.failure` are helpers used to build `Either` instances
(input, context) => (typeof input === 'string' ? t.success(input) : t.failure(input, context)), 
// `A` and `O` are the same, so `encode` is just the identity function
t.identity);
let a = Either_1.isRight(string.decode('a string')); // true
console.log(a);
let b = Either_1.isRight(string.decode(null)); // false
console.log(b);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkJBQTBCO0FBQzFCLDZDQUEwQztBQUMxQyxxR0FBcUc7QUFFckcsZUFBZTtBQUVmLDJDQUEyQztBQUMzQyw0Q0FBNEM7QUFDNUMsOENBQThDO0FBQzlDLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsNENBQTRDO0FBQzVDLCtCQUErQjtBQUUvQixtQ0FBbUM7QUFDbkMsNkNBQTZDO0FBRTdDLGlGQUFpRjtBQUNqRiw4RUFBOEU7QUFFOUUsK0RBQStEO0FBQy9ELHFDQUFxQztBQUNyQyxXQUFXO0FBRVgsNERBQTREO0FBQzVELHNDQUFzQztBQUN0QyxJQUFJO0FBRUosc0RBQXNEO0FBQ3RELGNBQWM7QUFDZCwyQ0FBMkM7QUFDM0Msa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkIsT0FBTztBQUNQLGdGQUFnRjtBQUNoRixvR0FBb0c7QUFDcEcsMkVBQTJFO0FBQzNFLGdDQUFnQztBQUNoQyxJQUFJO0FBR0osTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUN2QixRQUFRLEVBQ1IsQ0FBQyxLQUFjLEVBQW1CLEVBQUUsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRO0FBQzlELDJFQUEyRTtBQUMzRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM5RixzRUFBc0U7QUFDdEUsQ0FBQyxDQUFDLFFBQVEsQ0FDWCxDQUFBO0FBRUQsSUFBSSxDQUFDLEdBQUcsZ0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUEsQ0FBQyxPQUFPO0FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFFZCxJQUFJLENBQUMsR0FBRyxnQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDLFFBQVE7QUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQSJ9