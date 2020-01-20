import * as _ from 'lodash'


const any = {
    required: '{#label}不能为空'
};

const number = {
    integer: '{#label}必须为整数',
    min: '{#label}最小为{#limit}',
    max: '{#label}最大为{#limit}'
};

const string = {
    length: '{#label}必须为{#limit}个字符',
    min: '{#label}最少{#limit}个字符',
    max: '{#label}最多{#limit}个字符'
};

const date = {
    min: '{#label}最小为{#limit}',
    max: '{#label}最大为{#limit}',
    less: '{#label}必须小于{#limit}',
    greater: '{#label}必须大于{#limit}',
};

const all = _.assign({ any }, { number }, { string }, { date });

const tip = (p: string) => (key: string[]) => (r: object) => key.map(k => _.assign(r, { [p + k]: _.get(all, p + k) }));

// const object = () => ({
//     r: {},
//     ta: function(k) {
//         tip('any.')(k)(this.r);
//         return this;
//     },
//     ts: function(k) {
//         tip('string.')(k)(this.r);
//         return this;
//     },
//     tn: function(k) {
//         tip('number.')(k)(this.r);
//         return this;
//     },
//     td: function(k) {
//         tip('date.')(k)(this.r);
//         return this;
//     },
//     toString: function() {
//         return this.r
//     }
// });

function object() {
    this.ta = function(k) {
        tip('any.')(k)(this.r);
        return this;
    },
    this.ts = function(k) {
        tip('string.')(k)(this.r);
        return this;
    },
    this.tn = function(k) {
        tip('number.')(k)(this.r);
        return this;
    },
    this.td = function(k) {
        tip('date.')(k)(this.r);
        return this;
    }
});

export const ta = (k: string[]) => {
    return object().ta(k);
};

export const ts = (k: string[]) => {
    return object.ts(k);
};

export const tn = (k: string[]) => {
    return object.tn(k);
};

export const td = (k: string[]) => {
    return object.td(k);
};

ta.prototype.toString = function {
    console.log(objects.r)
}