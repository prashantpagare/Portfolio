import { Float } from '@react-three/drei';

export const Cube = () => {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial color="#4F46E5" wireframe />
      </mesh>
    </Float>
  );
};