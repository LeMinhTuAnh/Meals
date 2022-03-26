const validate_ingredients = (_ingredients) => {
  const valid_ingredients = []
  for(var item of _ingredients){
    if(item.amount <=0){
      continue
    }

    if(!valid_ingredients.some(ingre => ingre.name == item.name)){
      valid_ingredients.push(item)
    }
  }
  // console.log({valid_ingredients})
  return valid_ingredients
}

module.exports = {
  validate_ingredients
}