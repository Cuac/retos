const elements = document.querySelector(".personajes");
fetch("https://rickandmortyapi.com/api/character/")
    .then(function (person){
        return person.json();
    })
    .then(function(Jason){
        console.log(Jason);
        const resultados = Jason.results.map (function(nombres){
           // return nombres = Jason.results
            return `<div>
            <h2>Nombre ${nombres.name}</h2>
            <h2>El género es: ${nombres.gender}</h2>
            <h2>Su status es: ${nombres.status}</h2>
            <h2>Es de la especie: ${nombres.species}</h2>
            <img scr=${nombres.image} alt="${nombres.image}">
            </div>`

        })
        elements.innerHTML = resultados
            
  });

