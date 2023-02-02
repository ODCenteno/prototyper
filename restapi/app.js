const imgDOM = document.querySelector('.kitty-image');

const API_URL = "https://randomfox.ca/floof/";


async function reload() {
  const callFoxAPI = await fetch(API_URL);
  const foxData = await callFoxAPI.json();
  const imgFox = foxData.image;
  imgDOM.src = imgFox;
  return imgFox;
}
  // .then(res =>
  //     res.json())
  //   .then(data => {
  //     console.log(data);
  //     const imgDOM = document.querySelector('.kitty-image');
  //     imgDOM.src = data.image;
  //   })

  // Retos: cambiar la sintaxis por async await
  // agregar un botón y los eventos para recargar una nueva imagen al hacer clic

reload();
