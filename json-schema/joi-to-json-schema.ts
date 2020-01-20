import * as fs from 'fs'
import * as Joi2 from '@hapi/joi'
import * as Joi from 'joi'
import convert from 'joi-to-json-schema'

const joiSchema = Joi.object({
  'name': Joi.string().required().regex(/^\w+$/),
  'description': Joi.string().optional().default('no description provided'),
  'a': Joi.boolean().required().default(false)
});

fs.writeFileSync('out.json', convert(joiSchema))
