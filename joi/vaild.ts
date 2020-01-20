
import * as Joi from '@hapi/joi'

// const schema = Joi.object({
//     items: Joi.array().items(Joi.object({
//         name: Joi.string().allow('').required().messages({
//             'any.required': '姓名不能为空'
//         })
//     }).rename('eman', 'name').rename('ega', 'ages',{override: true, multiple: true})).min(0).required()
// })

const schema = Joi.object({
    items: Joi.array().items(Joi.object({
        name: Joi.string().min(1),
        age: Joi.number()
    }).rename('eman', 'name').rename('ega', 'ages',{override: true, multiple: true})).min(0).required()
})

try{
    // let res = schema.validate({ items: [{ name: 'po', age:12 }] })
    let res = schema.validate({ items: [{ name: '', age:12 }] })

    console.log("=================res===============")
    console.log(res)
    if (res.error) {
        console.log(res.error.details[0].message)
    } else {
        console.log(res.value)
    }
    
}catch (e) {
    console.log(e)
}