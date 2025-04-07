
getPokemon();

async function getPokemon() {
  let randomId = Math.floor(Math.random() * 898) + 1;
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

  let data = await response.json();
  console.log(data);
  // pokemon name
  let nameSrc = data.name;
  let nameElement = document.getElementById("pokemonName");
  nameElement.innerText = nameSrc.toUpperCase();
  // pokemon image
  let imgSrc = data.sprites.front_default;

  let imgElement = document.getElementById("pokemonImg");
  //   pokemon type
  let typeSrc = data.types[0].type.name;
  let typeElement = document.getElementById("pokemonType");
  typeElement.innerHTML = `Turi: ${typeSrc}`;

  // pokemo stats
  for (let i = 0; i <= 5; i++) {
    let statSrc = data.stats[i].base_stat;
    let statElement = document.getElementById(`${i}`);
    statElement.innerHTML = `${statSrc}`;
  }

  imgElement.src = imgSrc;
}
