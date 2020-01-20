import { EffectFactory } from '@marblejs/core'
import { map } from 'rxjs/operators'

export const createBatch$ = EffectFactory.matchPath('/batch')
    .matchType('POST')
    .use(req$ =>
        req$.pipe(
            map(req => {
                console.log(req.url)
                return {
                    body: {
                        code: 10000
                    }
                }

            })
        )
    )
