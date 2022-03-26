const {validate_ingredients} = require('./utils')


class IngredientStorage {

  constructor(_ingredients) {
    this.ingredients = validate_ingredients(_ingredients)
  }

  add_ingredients = (_ingredients) => {
    const compare_ingredients = validate_ingredients(_ingredients)
    const new_items = []

    compare_ingredients.forEach((item, index)=> {
      
      var is_existed = false
      this.ingredients.forEach((ingre, in_index) => {
        
        if(
          item.name == ingre.name &&
          item.unit == ingre.unit
        ){
          this.ingredients[in_index].amount += item.amount
          is_existed = true
        }

      })

      if(!is_existed){
        new_items.push(item)
      }

    })

    this.ingredients = [
      ...this.ingredients,
      ...new_items
    ]
  }

  remove_ingredients = (_ingredients) => {
    const compare_ingredients = validate_ingredients(_ingredients)

    compare_ingredients.forEach((item, index)=> {
      
      this.ingredients.forEach((ingre, in_index) => { 
        if(
          item.name == ingre.name &&
          item.unit == ingre.unit &&
          item.amount <= ingre.amount
        ){
          this.ingredients[in_index].amount -= item.amount

          if(this.ingredients[in_index].amount <= 0){
            this.ingredients.splice(in_index, 1)
            return
          }
        }
      })
    })

  }

  check_ingredients = (_ingredients) => {
    let is_check = true
    for(var item of _ingredients){

      if(item.amount < 0){
        is_check = false
        break
      }

      if (!this.ingredients.some(ingre =>
        ingre.name === item.name &&
        ingre.amount >= item.amount &&
        ingre.unit == item.unit 
      )) {
        is_check = false
      }
    }
    return is_check
  }

  get_ingredients = () => {
    return this.ingredients
  }

  set_ingredients = (_ingredients) => {
    this.ingredients = validate_ingredients(_ingredients)
  }

}

module.exports = IngredientStorage