import _ from 'lodash'

const data: {
    name: string,
    goods: {
      image_url: string,
      goods_id: number
    }[]
  }[] = [{"name": "衣服",   "goods": [{"goods_id": 1, "image_url": "pic.png"}, {"goods_id": 3, "image_url": "pge.png"}]}, {"name": "裤子",   "goods": [{"goods_id": 2, "image_url": "pic.png"}, {"goods_id": 5, "image_url": "pge.png"}]}]

const result = _(data).map(t => _.map(t.goods, 'goods_id')).flatten().value();
console.log(result)