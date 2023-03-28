let container = document.getElementById("container");

// const getCharacters = async () => {
//   const response = await fetch("https://rickandmortyapi.com/api/character");
//   const data = await response.json();

//   data.results.forEach(character => {
//     let div = document.createElement("div");
//     div.innerHTML = `
//        <h3>${character.name}</h3>
//        <p>${character.gender}</p>
//        <p>${character.status}</p>
//        <img src="${character.image}" />
//        <hr />
//     `;

//     container.append(div);
//   });
// };

// getCharacters();

const getCharacters = async () => {
  const response = await axios("https://rickandmortyapi.com/api/character");
  console.log(response);
  const data = response.data.results;

  data.forEach(character => {
    let div = document.createElement("div");
    div.innerHTML = `
       <h3>${character.name}</h3>
       <p>${character.gender}</p>
       <p>${character.status}</p>
       <img src="${character.image}" />
       <hr />
    `;

    container.append(div);
  });
};

getCharacters();