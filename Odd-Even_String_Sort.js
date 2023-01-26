function sortMyString(S) {
  let even = [], odd = [];
  S.split('').forEach((e, i) => { i % 2 === 0 ? even.push(e) : odd.push(e) })
  return `${even.join('')} ${odd.join('')}`;
}
