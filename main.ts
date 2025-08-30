import Experience from "./src/Experience";
Experience.instance;
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// const canvas = document.querySelector("#webgl");
// export const scene = new THREE.Scene();

// /**
//  * Camera
//  */
// const camera = new THREE.PerspectiveCamera(
//   45,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   100
// );
// camera.position.z = 5;
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.enablePan = false;
// controls.maxDistance = 10;
// scene.add(camera);

// /**
//  * Geometry
//  */
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshStandardMaterial();
// const box = new THREE.Mesh(geometry, material);
// scene.add(box);

// /**
//  * Lights
//  */
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// const pointLight = new THREE.PointLight(0xffffff, 0.5);
// pointLight.position.set(2, 2, 2);
// scene.add(ambientLight, pointLight);

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//   canvas,
// });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// renderer.render(scene, camera);

// window.addEventListener("resize", () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// });

// /**
//  * Animate
//  */
// const clock = new THREE.Clock();
// function tick() {
//   controls.update();
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// }
// tick();
