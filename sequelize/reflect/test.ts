const aa = {
  a: 'grg',
  b: 'po',
  c: 'xo'
}

const res = Object.keys(aa).reduce( (copy, key) => {
  // copy[key] = Object.assign({}, aa[key]);
  // return copy;
  console.log(Object.assign({}, aa[key]))
  console.log(aa[key])
  return {}
}, {});

console.log(res)