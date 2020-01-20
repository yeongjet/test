import * as t from 'io-ts';
import { isRight } from 'fp-ts/lib/Either'
interface PositiveBrand {
    readonly Positive: unique symbol // use `unique symbol` here to ensure uniqueness across modules / packages
  }
  
  const Positive = t.brand(
    t.number, // a codec representing the type to be refined
    (n): n is t.Branded<number, PositiveBrand> => n >= 0, // a custom type guard using the build-in helper `Branded`
    'Positive' // the name must match the readonly field in the brand
  )
  
  //type Positives = t.TypeOf<typeof Positive>
  console.log(isRight(Positive.decode(-1)))
//   let a: Positives = 1;
//   a-=100