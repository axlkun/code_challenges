function manufacture(gifts, materials) {
    
    let giftsCopy = [...gifts];

    let results = [...gifts];

    for(let i=0; i < giftsCopy.length; i++){

        chars = giftsCopy[i].split("");

        for(let x=0; x < chars.length; x++){

            if(!materials.includes(chars[x])){
                results = results.filter(palabra => palabra !== giftsCopy[i]);
                break;
            }
        }
    }

    return results;
  }

// function manufacture(gifts, materials) {
//     // Convertir los materiales a un conjunto para una búsqueda eficiente
//     const materialsSet = new Set(materials);

//     // Filtrar los regalos que se pueden fabricar
//     const manufacturableGifts = gifts.filter(gift => {
//         // Verificar si todos los caracteres del regalo están presentes en los materiales
//         return gift.split("").every(char => materialsSet.has(char));
//     });

//     return manufacturableGifts;
// }

//   const gifts = ['tren', 'oso', 'pelota']
//   const materials = 'tronesa'
  
//   console.log(manufacture(gifts, materials)) // ["tren", "oso"]
  // 'tren' SÍ porque sus letras están en 'tronesa'
  // 'oso' SÍ porque sus letras están en 'tronesa'
  // 'pelota' NO porque sus letras NO están en 'tronesa'
  
  const gifts = ['juego', 'puzzle']
  const materials = 'jlepuz'
  
  console.log(manufacture(gifts, materials)) // ["puzzle"]
  
//   const gifts = ['libro', 'ps5']
//   const materials = 'psli'
  
//   console.log(manufacture(gifts, materials)) // []