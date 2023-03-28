import * as THREE from "three";
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody, CapsuleCollider, useRapier } from '@react-three/rapier';
import { useKeyboardControls } from '@react-three/drei';

const direction = new THREE.Vector3();
const front = new THREE.Vector3();
const side = new THREE.Vector3();

function Player({ playerSpeed=5 }) {

  console.log(playerSpeed);

  const rigidRef = useRef();
  const rapier = useRapier();
  const [, get] = useKeyboardControls();
  useFrame((state) => {
    // Grab if keyboard buttons pressed
    const { forward, backward, left, right } = get();

    // Grab the current/prev velocity of the player
    const velocity = rigidRef.current.linvel(); 

    // Update camera to match player
    state.camera.position.set(...rigidRef.current.translation());

    front.set(0, 0, backward - forward);
    side.set(left - right, 0, 0);
    direction.subVectors(front, side).normalize().multiplyScalar(playerSpeed).applyEuler(state.camera.rotation);
    rigidRef.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });
  });

  return (
    <>
      <RigidBody ref={ rigidRef } mass={ 1 } type="dynamic" position={ [2.5, 0, 2.5] } colliders={false} enabledRotations={ [false, false, false] }>
        <CapsuleCollider args={ [1, 0.5] } />
      </RigidBody>
    </>
  );

}

export default Player;
