// require('dotenv').config()

// const MICHI_API_KEY = process.env.API_KEY

const imgDOM1 = document.getElementById('img1');
const imgDOM2 = document.getElementById('img2');

const imagesDOM = [imgDOM1, imgDOM2];
const imgSources = [];
const API_URL = "https://api.thecatapi.com/v1/images/search?limit=2";
const API_URL_FAV = "https://api.thecatapi.com/v1/favourites?limit=2";

function domify() {
  imagesDOM.forEach((image, i) => {
      image.src = imgSources[i];
  });
}

async function callAPI() {
  const callFoxAPI = await fetch(API_URL);
  const foxData = await callFoxAPI.json();
  foxData.forEach(data => {
    imgSources.push(data.url);
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
}

reload();
loadFavourites()
