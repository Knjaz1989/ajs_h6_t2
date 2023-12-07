export function getAttacks({ special }){
  let newArray = [];
  for (const attackItem of special) {
    const { id, name, icon, description = 'Описание недоступно'} = attackItem;
    newArray.push({id, name, icon, description});
  }
  return newArray;
}