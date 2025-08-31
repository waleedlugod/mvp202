import { Canvas } from "@react-three/fiber";
import { Gltf, OrbitControls } from "@react-three/drei";
import {
  CoefficientCombineRule,
  CuboidCollider,
  Physics,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import { useRef } from "react";
import { PointLight } from "three";

function App() {
  const debug = false;

  const rb = useRef<RapierRigidBody>(null); // heart rigid body ref
  const pl = useRef<PointLight>(null); // point light ref

  // makes heart jump and spin
  function jump() {
    if (rb.current) {
      const body = rb.current;
      body.applyImpulse({ x: 0, y: 30, z: 0 }, true);
      if (rb.current.angvel().y < 20)
        body.applyTorqueImpulse({ x: 0, y: 15, z: 0 }, true);
    }
  }

  return (
    <Canvas id="webgl" camera={{ position: [0, 0, 4] }}>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />

      <ambientLight intensity={0.8} color={"#ffc0cb"} />
      <directionalLight position={[0, 2, 0]} intensity={1} />
      <pointLight ref={pl} position={[1.5, 1.5, 1.5]} intensity={5} />
      {debug && pl.current ? <pointLightHelper args={[pl.current]} /> : <></>}

      <Physics debug={debug}>
        {/* roof */}
        <RigidBody type="fixed">
          <mesh position={[0, 1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[10, 10]} />
            <meshBasicMaterial />
          </mesh>
        </RigidBody>

        {/* heart */}
        <RigidBody
          ref={rb}
          enabledTranslations={[false, true, false]}
          enabledRotations={[false, true, false]}
          friction={0.2}
          frictionCombineRule={CoefficientCombineRule.Min}
          colliders={false} // use custom collider since auto is not centered
        >
          <CuboidCollider args={[1, 1, 1]} />
          <Gltf src={"/assets/scene.gltf"} scale={0.01} onClick={jump} />
        </RigidBody>

        {/* floor */}
        <RigidBody type="fixed">
          <mesh position={[0, -2, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry args={[10, 10]} />
            <meshBasicMaterial />
          </mesh>
        </RigidBody>
      </Physics>
    </Canvas>
  );
}

export default App;
