
const fs = require('fs')
var joi = require('@hapi/joi'),
    convert = require('joi-to-json-schema'),
    joiSchema = joi.object({
      'name': joi.string().min(1).max(12).required(),
      'description': joi.string().optional().default('no description provided'),
      'a': joi.boolean().required().default(false)
    });

fs.writeFileSync('out.json', JSON.stringify(convert(joiSchema), null, 4));