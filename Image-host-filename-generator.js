function generateName()
{
  let result = Math.random().toString(36).substring(2,6);
  return result;
}

console.log(generateName());