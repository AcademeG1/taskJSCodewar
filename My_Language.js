function myLanguages(results) {
  return Object.entries(results).filter(el => el[1] >= 60).sort((a, b) => b[1] - a[1]).map(item => item[0]);
}
