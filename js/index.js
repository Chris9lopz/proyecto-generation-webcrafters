// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import {  getAuth} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'

const auth = getAuth();

// Add the Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyBfF0yCq5dmZna3p8aq3vwXSc4hBuvIQDM",
  authDomain: "web-minds-colombia.firebaseapp.com",
  projectId: "web-minds-colombia",
  storageBucket: "web-minds-colombia.appspot.com",
  messagingSenderId: "359149667366",
  appId: "1:359149667366:web:1dcaa9bb5ea574492f92e7"
};

const app = initializeApp(firebaseConfig);

var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }

  function actualizarEstado() {
    if (localStorage.getItem('logueado') == 1){
      let iniciarS = document.querySelector('.dropdown-item');
      iniciarS.innerText = 'Cerrar Sesión';
    } else {
      console.log("No se ha recuperado el elemento");
    }
  }
  // Llamado de función
actualizarEstado();