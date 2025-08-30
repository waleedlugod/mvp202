import * as THREE from "three";
import Renderer from "./Renderer";
import Camera from "./Camera";

export default class Experience {
  static #instance: Experience;
  #scene: THREE.Scene;
  #canvas: HTMLCanvasElement;
  #renderer: Renderer;
  #camera: Camera;

  private constructor() {
    this.#canvas = <HTMLCanvasElement>document.getElementById("webgl");
    this.#scene = new THREE.Scene();

    this.#camera = new Camera(this.#canvas);
    this.#scene.add(this.#camera.instance);
    this.#renderer = new Renderer(this.#canvas);
  }

  static get instance(): Experience {
    if (!Experience.#instance) {
      Experience.#instance = new Experience();
    }
    return Experience.#instance;
  }

  get scene(): THREE.Scene {
    return this.#scene;
  }

  get canvas(): HTMLCanvasElement {
    return this.#canvas;
  }

  get renderer(): Renderer {
    return this.#renderer;
  }

  get camera(): Camera {
    return this.#camera;
  }
}
