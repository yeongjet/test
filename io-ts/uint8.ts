import * as t from 'io-ts'
import { isRight } from 'fp-ts/lib/Either'

const uint8 = new t.Type<number, number, unknown>(
    'uint8',
    (input: unknown): input is number => typeof input === 'number',
    (input, context) => (typeof input === 'number' && Number.isInteger(input) && input >= 0 && input <= 255 ? t.success(input) : t.failure(input, context)),
    t.identity
)
console.log(uint8);
type UINT8 = t.TypeOf<typeof uint8>
let a:UINT8  = 9
console.log(isRight(uint8.decode(a)));
a = a+999
console.log(isRight(uint8.decode(a)));
