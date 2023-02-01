console.log('hello world');

const url = "https://randomfox.ca/floof/";

fetch(url)
  .then(res =>
    res.json())
  .then(data => {
    console.log(data);
    const imgDOM = document.querySelector('.kitty-image');
    imgDOM.src = data.image;
  })

  // Retos: cambiar la sintaxis por async await
  // agregar un botón y los eventos para recargar una nueva imagen al hacer clic
