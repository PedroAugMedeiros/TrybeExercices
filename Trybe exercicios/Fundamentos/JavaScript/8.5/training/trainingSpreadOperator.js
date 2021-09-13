// Faça uma lista com as suas frutas favoritas
const specialFruit = ['uva', 'melancia', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['hotdog', 'pizza', 'pão'];

const fruitSalad = (fruit, additional) => {
    const allFoods = [...fruit, ...additional]
    return allFoods;
};

console.log(fruitSalad(specialFruit, additionalItens));