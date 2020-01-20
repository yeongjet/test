var parse = require('json-schema-to-markdown')
const fs = require('fs')
var schema = {
  "type": "object",
  "title": "empty object",
  "properties": {
    "errcode": {
      "type": "integer",
      "mock": {
        "mock": "0"
      },
      "description": "错误码"
    },
    "errmsg": {
      "type": "string",
      "mock": {
        "mock": "@word"
      },
      "description": "错误信息"
    },
    "data": {
      "type": "object",
      "properties": {
        "salesman_id": {
          "type": "integer",
          "mock": {
            "mock": "@id"
          }
        },
        "store_id": {
          "type": "integer",
          "mock": {
            "mock": "@id"
          }
        },
        "name": {
          "type": "string",
          "mock": {
            "mock": "@name"
          }
        },
        "cellphone": {
          "type": "string",
          "mock": {
            "mock": "@natural"
          }
        }
      },
      "required": [
        "salesman_id",
        "store_id",
        "name",
        "cellphone"
      ],
      "description": "返回数据"
    }
  },
  "required": [
    "errcode",
    "errmsg",
    "data"
  ]
}
var markdown = parse(schema)

fs.writeFileSync('out.md', markdown)