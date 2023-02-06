// require('dotenv').config()

// const MICHI_API_KEY = process.env.API_KEY

const imgDOM1 = document.getElementById('img1');
const imgDOM2 = document.getElementById('img2');
const spanError = document.getElementById('error');

const imagesDOM = [imgDOM1, imgDOM2];
let imgSources = [];
const API_URL_RANDOM = "https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_NO3mp7zCj5AXEjbULlOQYt0b4wsE2GR8Jux75bIk1LuM2HBAlpMzOdrQQ3QCQU8s`";
const API_URL_FAV = `https://api.thecatapi.com/v1/favourites`;
const API_URL_DELETE_FAV = (id) => `https://api.thecatapi.com/v1/favourites/${id}`;

async function saveFavourite(id) {
  console.log(`clicked to save michi with id: ${id}`);
  const res = await fetch(API_URL_FAV, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'live_NO3mp7zCj5AXEjbULlOQYt0b4wsE2GR8Jux75bIk1LuM2HBAlpMzOdrQQ3QCQU8s',
    },
    body: JSON.stringify({
      image_id: id
    }),
  })

  const data = await res.json();
  console.log(data)
  if (res.status !== 200) {
    spanError.innerHTML = 'Hubo un error: ' + data.message;
  } else {
    reload();
  }
}

function domify() {
  imagesDOM.forEach((image, i) => {
      console.log(image, i)
      image.src = imgSources[i].url;
      image.id = imgSources[i].id;
    });
    const btnDOM1 = document.getElementById('btn1');
    const btnDOM2 = document.getElementById('btn2');
    console.log(imagesDOM[0].id);
    btnDOM1.onclick = () => saveFavourite(imagesDOM[0].id);
    btnDOM2.onclick = () => saveFavourite(imagesDOM[1].id);
  }

  async function callAPI() {
    imgSources = [];
    const callFoxAPI = await fetch(API_URL_RANDOM);
    const foxData = await callFoxAPI.json();
    foxData.forEach(data => {
      imgSources.push({url: data.url, id: data.id});
    })
    console.log(imgSources);
}

async function reload() {
  try {
    for (let i = 0; i < imagesDOM.length; i++) {
      await callAPI();
    }
    console.log(imgSources);
    domify();
  } catch (error) {
    console.error(error);
  }
}

async function loadFavourites() {
  const res = await fetch(API_URL_FAV, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'live_NO3mp7zCj5AXEjbULlOQYt0b4wsE2GR8Jux75bIk1LuM2HBAlpMzOdrQQ3QCQU8s',
    }
  });
  const data = await res.json();
  console.log(`Info de Favoritos:`);
  console.log(data);

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  } else {
    data.forEach(item => {
      const containter = document.getElementById('favs')
      const article = document.createElement('article');
      const img = document.createElement('img');
      const btn = document.createElement('button');
      const btnText = document.createTextNode('Sacar al michi de favoritos');

      img.src = item.image.url;
      img.width = 150;
      btn.appendChild(btnText);
      btn.onclick = () => deleteFav(item.image.id);
      article.appendChild(img);
      article.appendChild(btn);
      containter.appendChild(article);
    //   containter.innerHTML += `<article>
    //   <img src='${item.image.url}' width="350" class="kitty-image" id="${item.image.id}" alt="fotogragrafia de un zorro aleatorio">
    //   <button id="${item.image.id}" class="btn_delete" onclick="deleteFav('${item.image.id}')"><span class="material-icons">
    //   delete
    //   </span></button>
    // </article>`
    })
  }
}

async function deleteFav(id) {
  console.log(`ID to delete: ${id}`)
  try {
    const res = await fetch(`https://api.thecatapi.com/v1/favourites/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'live_NO3mp7zCj5AXEjbULlOQYt0b4wsE2GR8Jux75bIk1LuM2HBAlpMzOdrQQ3QCQU8s',
      },
    });

    const data = await res.json();
    console.log(`Respuesta al eliminar: ${data}`)
    if (res.status !== 200) {
      console.log(`Hubo un error: ${data.message}`);
    } else {
      console.log('Michi eliminado de favoritos');
      reload()
    }
  } catch (error) {
    console.error(`Error con petición delete: ${error}`);
  }

}

reload( imgSources );
loadFavourites()

// btnDelete.addEventListener('click', function(e) {
//   console.log(e);
//   // deleteFav(e.id);
// });
