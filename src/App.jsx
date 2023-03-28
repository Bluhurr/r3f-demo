import { Canvas } from '@react-three/fiber';
import { Environment, SpotLight, Stage, KeyboardControls, PointerLockControls, OrbitControls, SoftShadows } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { Physics, RigidBody, CuboidCollider, BallCollider } from '@react-three/rapier';
import Player from './Player';
import Room from './Room';

function App() {
  return (
    <div className="app">
      <h1 className="planning-diva-heading">Planning Diva Three Demo</h1>

      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
            { name: "backward", keys: ["ArrowDown", "s", "S"] },
            { name: "left", keys: ["ArrowLeft", "a", "A"] },
            { name: "right", keys: ["ArrowRight", "d", "D"] },
            { name: "jump", keys: ["Space"] },
        ]}
      >
        <Canvas 
          className="r3f-canvas"
          shadows
          camera={{
            rotation: [ 0, Math.PI * 0.25, 0 ],
            lookAt: [0, 0, 0],
            fov: 60
          }}
        >

          {/* Drei Helpers */}
          <Perf />
          <Environment
            background={true} // can be true, false or "only" (which only sets the background) (default: false)
            blur={ 100 } // blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
            resolution={ 128 }
            preset="apartment" 
            intensity={ 0.5 }
          />

          <spotLight
            penumbra={ 0.1 }
            angle={ Math.PI/4 }
            castShadow
            shadow-mapSize={ [2048, 2048] }
            intensity={ 1 }
            position={ [0, 2.9, 0] }
          />
          <spotLight
            penumbra={ 0.1 }
            angle={ Math.PI/4 }
            castShadow
            shadow-mapSize={ [2048, 2048] }
            intensity={ 0.5 }
            position={ [0, 2.9, 2] }
          />
          <SpotLight
            distance={6}
            angle={Math.PI / 6.5}
            attenuation={9}
            anglePower={10} // Diffuse-cone anglePower (default: 5)
            position={ [0, 4.7, 0] }
          />
          <directionalLight intensity={ 0.5 } position={ [15, 5, 10] }/>
          <directionalLight intensity={ 0.7 } position={ [-2, -5, 10] }/>
          <ambientLight intensity={ 0.5 }/>

          <Physics gravity={ [0, -9.8, 0] }>
            <Player playerSpeed={ 5 }/>

            <Room color={ '#0084BD' } roughness={ 0.7 }/>

            <RigidBody type="dynamic" mass={ 0.001 } colliders={false} linearDamping={ 0.0 } angularDamping={ 0.0 }>
              <mesh castShadow scale={ 0.5 } position-y={ 0.5 }>
                <sphereGeometry />
                <meshStandardMaterial color="green" roughness={ 0.1 }/>
              </mesh>
              <BallCollider args={ [0.5] } position={ [0, 0.5, 0] }/>
            </RigidBody>

            <RigidBody type="dynamic" mass={ 0.001 } colliders={false} linearDamping={ 0.0 } angularDamping={ 0.0 }>
              <mesh castShadow scale={ 0.5 } position-y={ 0.5 }>
                <sphereGeometry />
                <meshStandardMaterial color="green" roughness={ 0.1 }/>
              </mesh>
              <BallCollider args={ [0.5] } position={ [0, 0.5, 0] }/>
            </RigidBody>

            <RigidBody type="dynamic" mass={ 0.001 } colliders={false} linearDamping={ 0.0 } angularDamping={ 0.0 }>
              <mesh castShadow scale={ 0.5 } position-y={ 0.5 }>
                <sphereGeometry />
                <meshStandardMaterial color="green" roughness={ 0.1 }/>
              </mesh>
              <BallCollider args={ [0.5] } position={ [0, 0.5, 0] }/>
            </RigidBody>

            <RigidBody type="fixed" colliders={false}>
              <mesh receiveShadow scale={ 1000 } rotation-x={ -Math.PI * 0.5 }>
                <planeGeometry />
                <meshStandardMaterial color="#aaaaaa" roughness={ 0.4 }/>
              </mesh>

              <CuboidCollider args={ [1000, 2, 1000] } position={ [0, -2, 0] }/>
            </RigidBody>
          </Physics>


          <PointerLockControls />

        </Canvas>
      </KeyboardControls>

    </div>
  )
}

export default App
