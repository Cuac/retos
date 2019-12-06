
//Spread Operator
const frutas = ["platano", "manzana", "mango"]
const totalFrutas = ["pera", "durazno", ...frutas];
console.log(totalFrutas);

const helados = ["vainilla", "chocolate"]
const totalHelados = ["fresa", "menta", "chocomenta", ...helados];
console.log(totalHelados);

//Destructuring
var whatsapp = {
    createdBy: "Brian Acton",
    founded: 2009,
    writtenIn: "Erlang"    
  };

  const {createdBy, founded, writtenIn} = whatsapp 
  console.log (createdBy, founded, writtenIn);