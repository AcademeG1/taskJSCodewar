function recycle(array) {
  let materials = { "paper": [], "glass": [], "organic": [], "plastic": [] }
  
  array.forEach(o => {
    materials[o.material].push(o.type);
    if(o.secondMaterial)
      materials[o.secondMaterial].push(o.type);
  });
  return Object.values(materials);
  
}
