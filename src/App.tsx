import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas id="webgl">
      <OrbitControls />
      <ambientLight />
      <directionalLight position={[1, 2, 3]} intensity={2} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </Canvas>
  );
}

export default App;
