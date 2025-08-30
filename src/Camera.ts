import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export default class Camera {
  #instance: THREE.PerspectiveCamera;

  constructor(_canvas: HTMLCanvasElement) {
    this.#instance = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.#instance.position.z = 5;

    const controls = new OrbitControls(this.#instance, _canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.maxDistance = 10;
  }

  get instance(): THREE.PerspectiveCamera {
    return this.#instance;
  }
}
