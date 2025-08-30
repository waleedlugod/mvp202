import * as THREE from "three";
import Experience from "./Experience";

export default class Renderer {
  #instance: THREE.WebGLRenderer;

  constructor(_canvas: HTMLCanvasElement) {
    this.#instance = new THREE.WebGLRenderer({ canvas: _canvas });
    this.#instance.setSize(window.innerWidth, window.innerHeight);
    this.#instance.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  get instance(): THREE.WebGLRenderer {
    return this.#instance;
  }

  update(): void {
    const scene = Experience.instance.scene;
    const camera = Experience.instance.camera;
    this.#instance.render(scene, camera.instance);
  }
}
