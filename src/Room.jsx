import * as THREE from "three";
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody, CuboidCollider } from '@react-three/rapier';

function Room({ color='white', roughness=0.5}) {
  return (
    <>
      <RigidBody mass={ 1 } type="fixed" position={ [0, 0, -5] } colliders={false} enabledRotations={ [false, false, false] }>
        <mesh castShadow position-y={ 0 } scale={ [10, 10, 1] }>
          <boxGeometry />
          <meshStandardMaterial color={ color } roughness={ roughness }/>
        </mesh>
        <CuboidCollider args={ [5, 10, 0.5] } />
      </RigidBody>

      <RigidBody mass={ 1 } type="fixed" position={ [0, 0, 5] } colliders={false} enabledRotations={ [false, false, false] }>
        <mesh castShadow position-y={ 0 } scale={ [10, 10, 1] }>
          <boxGeometry />
          <meshStandardMaterial color={ color } roughness={ roughness }/>
        </mesh>
        <CuboidCollider args={ [5, 10, 0.5] } />
      </RigidBody>

      <RigidBody mass={ 1 } type="fixed" position={ [5, 0, 0] } colliders={false} enabledRotations={ [false, false, false] }>
        <mesh castShadow position-y={ 0 } scale={ [10, 10, 1] } rotation-y={ Math.PI * 0.5 }>
          <boxGeometry />
          <meshStandardMaterial color={ color } roughness={ roughness }/>
        </mesh>
        <CuboidCollider args={ [0.5, 10, 5] } />
      </RigidBody>

      <RigidBody mass={ 1 } type="fixed" position={ [-5, 0, 0] } colliders={false} enabledRotations={ [false, false, false] }>
        <mesh castShadow position-y={ 0 } scale={ [10, 10, 1] } rotation-y={ Math.PI * 0.5 }>
          <boxGeometry />
          <meshStandardMaterial color={ color } roughness={ roughness }/>
        </mesh>
        <CuboidCollider args={ [0.5, 10, 5] } />
      </RigidBody>

      <RigidBody mass={ 1 } type="fixed" position={ [0, 5, 0] } colliders={false} enabledRotations={ [false, false, false] }>
        <mesh castShadow position-y={ 0 } scale={ [10, 1, 10] }>
          <boxGeometry />
          <meshStandardMaterial color={ color } roughness={ roughness }/>
        </mesh>
        <CuboidCollider args={ [5, 0.5, 5] } />
      </RigidBody>
    </>
  );
}

export default Room;
