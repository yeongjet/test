const _ = require('lodash')
const logistics = [{
    goods_id: [1,2],
    track_no: 'abc123',
    company_name: '顺丰'
},{
    goods_id: [3,4],
    track_no: 'qwe123',
    company_name: '申通'
},{
    goods_id: [6,7],
    track_no: 'qwe123',
    company_name: '申通'
},{
    goods_id: [9],
    track_no: 'qwe1234',
    company_name: '申通'
}];
const po:{
    goods_id: number[],
    track_no: string,
    company_name: string
}[] = []

_.map(logistics, n => {
    const target = _.filter(po, k => {
        return k && k.company_name === n.company_name && k.track_no === n.track_no
    })[0]
    if(_.isEmpty(target)){
        po.push(n)
    }else{
        target.goods_id = _.concat(target.goods_id, n.goods_id)
    }
})

console.log(po)