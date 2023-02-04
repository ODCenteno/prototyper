// require('dotenv').config()

// const MICHI_API_KEY = process.env.API_KEY

const imgDOM1 = document.getElementById('img1');
const imgDOM2 = document.getElementById('img2');

const imagesDOM = [imgDOM1, imgDOM2];
let imgSources = [];
const API_URL_RANDOM = "https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_NO3mp7zCj5AXEjbULlOQYt0b4wsE2GR8Jux75bIk1LuM2HBAlpMzOdrQQ3QCQU8s`";
const API_URL_FAV = `https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_NO3mp7zCj5AXEjbULlOQYt0b4wsE2GR8Jux75bIk1LuM2HBAlpMzOdrQQ3QCQU8s`;

function domify() {
  imagesDOM.forEach((image, i) => {
      image.src = imgSources[i].url;
  });
}

async function callAPI() {
  imgSources = [];
  const callFoxAPI = await fetch(API_URL_RANDOM);
  const foxData = await callFoxAPI.json();
  foxData.forEach(data => {
    imgSources.push({url: data.url, id: data.id});
  })
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
  const res = await fetch(API_URL_FAV);
  const data = await res.json();
  console.table(data)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  }
}

async function saveFavourite() {
  const res = await fetch(API_URL_FAV, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image_id
    })
  })
}

reload( imgSources );
loadFavourites()
