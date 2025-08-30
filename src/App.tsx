import { Canvas } from "@react-three/fiber";
import { Gltf, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas id="webgl">
      <OrbitControls />
      <ambientLight />
      <directionalLight position={[1, 2, 3]} intensity={2} />
      <Gltf src={"/assets/scene.gltf"} scale={0.01} position={[0, -0.3, 0]} />
    </Canvas>
  );
}

export default App;
