console.log(">>>>>>>>> 모델링 호출을 시작합니다.");
// import * as THREE from '../WB36_GG_VR_Letss_threejs/node_modules/three/build/three.module'
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import Stats from 'three/examples/jsm/libs/stats.module'


/////////////////////////////////




let mobile,
    arHeader,
    arBtn,
    contentWrapper,
    swiperContainer,
    add1Active, add01,
    add2Active, add02,
    add3Active, add03;
let arFlag = false,
    isSwiperInitialized = false;
let sliderList = [];

/**
 * Reset slides and additional panels.
 */
function resetSlide() {
  setTimeout(() => {

    add01.style.display = 'none';
    add02.style.display = 'none';
    add03.style.display = 'none';
  }, 10)
}

/**
 * Switch additional slides.
 * @param num
 */
function slide(num) {
  switch (num) {
    case 0:
      add01.style.display = 'block';
      add02.style.display = 'none';
      add03.style.display = 'none';
      break;
    case 1:
      add01.style.display = 'none';
      add02.style.display = 'block';
      add03.style.display = 'none';
      break;
    case 2:
      add01.style.display = 'none';
      add02.style.display = 'none';
      add03.style.display = 'block';
      break;
  }
}

/**
 * Initialize Swiper elements.
 */
function initSwiper() {
  console.warn(`initSwiper`);

  let mainSwiper = new Swiper('#swiper-container', {
    effect: 'coverflow',
    loop: false,
    centeredSlides: true,
    slidesPerView: 1,
    initialSlide: 1,
    preventClicks: false,
    preventClicksPropagation: false,
    coverflowEffect: {
      rotate: 0,
      stretch: -100,
      depth: 650,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagenation',
      type: 'bullets',
      clickable: 'true',
    },
    on: {
      slideChange: function() {
        resetSlide();
      },
    },
  });

  let relatedProductARSwiper = new Swiper('#swiper-related-product-ar', {
    effect: 'flip',
    loop: false,
    autoplay: {
      delay: 3000,
      waitForTransition: false,
    },
    speed: 1000,
    allowTouchMove: false,
    centeredSlides: true,
    slidesPerView: 1,
    initialSlide: 0,
  });

}

/**
 * Add XRElements into Entity.
 */
function getElementString(str){
  return str.replace(/ /, '').trim();
}

/**
 * Create XRElements from DOM Elements and add into Entity.
 */
function addXRElementsIntoEntity() {

  const entity = letsee.getEntityByUri('https://developer.letsee.io/api-tm/target-manager/target-uid/60519a98672274a33ec9f493');

  let xr_1 = letsee.createXRElement(getElementString(add01.innerHTML), entity);
  let xr_2 = letsee.createXRElement(getElementString(add02.innerHTML), entity);
  let xr_3 = letsee.createXRElement(getElementString(add03.innerHTML), entity);
  // letsee.bindXRElement(xr_1, entity);
  // letsee.bindXRElement(xr_2, entity);
  // letsee.bindXRElement(xr_3, entity);

  sliderList.push(xr_1, xr_2, xr_3);
  sliderList.forEach(xr => {
    xr.position.set(0, 0, 1);
    xr.element.style.visibility = 'hidden';
  });
}

/**
 * Initialize app.
 */
function initApp() {
  console.warn(`initApp`);

  addXRElementsIntoEntity();

  document.querySelectorAll('.closeBtn').forEach(val => {
    val.addEventListener('click', resetSlide);
  });
}

window.onload = () => {

  contentWrapper = document.getElementById('content-wrapper');
  swiperContainer = document.getElementById('swiper-container');
  mobile         = document.getElementById('mobile');
  arHeader       = document.getElementById('arHeader');
  add1Active     = document.getElementById('add1Active');
  add2Active     = document.getElementById('add2Active');
  add3Active     = document.getElementById('add3Active');
  add01          = document.getElementById('additional01'); // slide_0
  add02          = document.getElementById('additional02'); // slide_1
  add03          = document.getElementById('additional03'); // slide_2
  console.warn(`AR MODE`);
  contentWrapper.style.display = 'none';
  swiperContainer.style.display = 'block';

  initSwiper();

  add1Active.addEventListener('click', () => slide(0));
  add2Active.addEventListener('click', () => slide(1));
  add3Active.addEventListener('click', () => slide(2));

}


///////////////////////////////


//    const renderer = new THREE.WebGLRenderer({ powerPreference: "high-performance" });
//         const scene = new THREE.Scene()
// camera.position.z = 2

// // rect.width = Math.round(rect.width);
// renderer.setSize(window.innerWidth, window.innerHeight)

// document.body.appendChild(renderer.domElement)

// const controls = new OrbitControls(camera, renderer.domElement)



// const cube = new THREE.Mesh(geometry, material)
// scene.add(cube)

// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     render()
// }

// const stats = Stats()
// document.body.appendChild(stats.dom)

// function animate() {
//     requestAnimationFrame(animate)

//     // controls.update()

//     render()

//     stats.update()
// }

// function render() {
//     renderer.render(scene, camera)
// }

// animate()