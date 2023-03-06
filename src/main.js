import "./styles/reset.css";
import "./styles/style.css";

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

const coordinates = [4.4177433, 51.2300305];

async function success(position) {
  const apiKey =
    "pk.eyJ1Ijoic2lub3NhbWF0ZWgiLCJhIjoiY2xhbDNweGs3MDFoejNyb2JkenRyNTFsYSJ9.-HKLfUnvGXGcziU54rqbUA";
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates}.json?access_token=${apiKey}`;

  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    document.querySelector("#address").textContent =
      json.features[0].place_name;
    loader.style.display = "none"; // Hide loader
  } catch (error) {
    console.log(error);
  }
}

success();
