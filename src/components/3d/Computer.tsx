import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export const Computer = () => {
  const groupRef = useRef<THREE.Group>(null);
  const monitorRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Monitor */}
        <mesh ref={monitorRef} position={[0, 0, 0]}>
          <boxGeometry args={[3, 2, 0.2]} />
          <meshStandardMaterial color="#2f2f2f" />
          {/* Screen */}
          <mesh position={[0, 0, 0.11]}>
            <planeGeometry args={[2.8, 1.8]} />
            <meshBasicMaterial color="#000000">
              <videoTexture attach="map" args={[createCodeVideo()]} />
            </meshBasicMaterial>
          </mesh>
          {/* Monitor Stand */}
          <mesh position={[0, -1.3, 0]}>
            <boxGeometry args={[0.4, 0.6, 0.2]} />
            <meshStandardMaterial color="#2f2f2f" />
          </mesh>
          <mesh position={[0, -1.6, 0.2]}>
            <boxGeometry args={[1, 0.1, 0.6]} />
            <meshStandardMaterial color="#2f2f2f" />
          </mesh>
        </mesh>

        {/* Keyboard */}
        <mesh position={[0, -1.6, 1]}>
          <boxGeometry args={[2, 0.1, 0.6]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>

        {/* Mouse */}
        <mesh position={[1.5, -1.6, 1]}>
          <boxGeometry args={[0.3, 0.1, 0.5]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>

        {/* CPU */}
        <mesh position={[-2, -1, 0]}>
          <boxGeometry args={[1, 2, 1]} />
          <meshStandardMaterial color="#1a1a1a" />
          {/* Power LED */}
          <mesh position={[0, 0.8, 0.51]}>
            <circleGeometry args={[0.05]} />
            <meshBasicMaterial color="#00ff00" />
          </mesh>
        </mesh>
      </group>
    </Float>
  );
};

function createCodeVideo() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;
  const video = document.createElement('video');
  video.width = canvas.width;
  video.height = canvas.height;
  
  let yPos = 0;
  setInterval(() => {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '12px monospace';
    ctx.fillStyle = '#00ff00';
    
    for (let i = 0; i < 20; i++) {
      const y = ((yPos + i * 20) % canvas.height);
      ctx.fillText(`describe('Test Suite', () => {`, 10, y);
      ctx.fillText(`  test('should pass', async () => {`, 30, y + 15);
      ctx.fillText(`    await expect(page).toBeVisible();`, 50, y + 30);
      ctx.fillText(`  });`, 30, y + 45);
      ctx.fillText(`});`, 10, y + 60);
    }
    
    yPos = (yPos + 1) % 20;
    video.srcObject = canvas.captureStream();
  }, 50);
  
  video.play();
  return video;
}