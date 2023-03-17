import './styles/reset.css';
import './styles/style.css';
import '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js';
// core version + navigation, pagination modules:

// eslint-disable-next-line no-unused-vars
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

const coordinates = [4.4177433, 51.2300305];

// eslint-disable-next-line no-unused-vars
async function success(position) {
  const apiKey =
    'pk.eyJ1Ijoic2lub3NhbWF0ZWgiLCJhIjoiY2xhbDNweGs3MDFoejNyb2JkenRyNTFsYSJ9.-HKLfUnvGXGcziU54rqbUA';
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates}.json?access_token=${apiKey}`;

  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    document.querySelector('#address').textContent =
      json.features[0].place_name;
    // eslint-disable-next-line no-undef
    loader.style.display = 'none'; // Hide loader
  } catch (error) {
    console.log(error);
  }
}

success();

// create instance of kinet with custom settings
// eslint-disable-next-line no-undef
var kinet = new Kinet({
  acceleration: 0.06,
  friction: 0.2,
  names: ['x', 'y'],
});

// select circle element
var circle = document.getElementById('circle');

// set handler on kinet tick event
kinet.on('tick', function (instances) {
  circle.style.transform = `translate3d(${instances.x.current}px, ${
    instances.y.current
  }px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${
    instances.y.velocity / 2
  }deg)`;
});

// call kinet animate method on mousemove
document.addEventListener('mousemove', function (event) {
  kinet.animate('x', event.clientX - window.innerWidth / 2);
  kinet.animate('y', event.clientY - window.innerHeight / 2);
});

// log
kinet.on('start', function () {
  console.log('start');
});

kinet.on('end', function () {
  console.log('end');
});

// eslint-disable-next-line no-undef
$(document).ready(function () {
  // eslint-disable-next-line no-undef
  $('#nav-icon3').click(function () {
    // eslint-disable-next-line no-undef
    $(this).toggleClass('open');
  });
});

function toggleMobileNav() {
  var mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('open');
}

document.getElementById('nav-icon3').addEventListener('click', function () {
  toggleMobileNav();
});

// eslint-disable-next-line no-unused-vars
function closeMobileNav() {
  var mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.remove('open');
}
