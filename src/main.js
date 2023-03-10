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

// create instance of kinet with custom settings
var kinet = new Kinet({
  acceleration: 0.06,
  friction: 0.2,
  names: ["x", "y"],
});

// select circle element
var circle = document.getElementById("circle");

// set handler on kinet tick event
kinet.on("tick", function (instances) {
  circle.style.transform = `translate3d(${instances.x.current}px, ${
    instances.y.current
  }px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${
    instances.y.velocity / 2
  }deg)`;
});

// call kinet animate method on mousemove
document.addEventListener("mousemove", function (event) {
  kinet.animate("x", event.clientX - window.innerWidth / 2);
  kinet.animate("y", event.clientY - window.innerHeight / 2);
});

// log
kinet.on("start", function () {
  console.log("start");
});

kinet.on("end", function () {
  console.log("end");
});
