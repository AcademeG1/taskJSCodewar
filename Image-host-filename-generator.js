function generateName()
{
    return Math.random().toString(36).substr(2,6);
}

console.log(generateName());