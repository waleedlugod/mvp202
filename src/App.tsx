import { Canvas } from "@react-three/fiber";
import { Gltf, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas id="webgl">
      <OrbitControls enableZoom={true} enablePan={false} />
      <ambientLight intensity={0.8} color={"#ffc0cb"} />
      <directionalLight position={[0, 2, 0]} intensity={1} />
      <pointLight position={[1.5, 1.5, 1.5]} intensity={5} />
      <Gltf src={"/assets/scene.gltf"} scale={0.01} position={[0, -0.3, 0]} />
    </Canvas>
  );
}

export default App;
