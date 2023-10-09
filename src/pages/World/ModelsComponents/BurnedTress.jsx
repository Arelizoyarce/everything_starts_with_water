import { useGLTF } from "@react-three/drei"

export default function BurnedTress(){
    const trees = useGLTF('./models/burned/arboles_incerados.glb');
    const trees_2 = useGLTF('./models/burned/arboles_incerados _2.glb');
    const trees_3 = useGLTF('./models/burned/arboles_incerados _3.glb');
    trees.scene.position.y = 74;
    trees.scene.position.x = -50;
    trees.scene.scale.set(15, 15, 15);

    trees_2.scene.position.y = 87;
    trees_2.scene.position.x = 10;
    trees_2.scene.position.z = 150;
    trees_2.scene.rotation.set(0, Math.PI /1.47, 0);
    trees_2.scene.scale.set(15, 15, 15);

    trees_3.scene.position.y = 90;
    trees.scene.position.z = -90;
    trees.scene.position.x = 40;
    trees_3.scene.scale.set(15, 15, 15);
    return (
        <mesh position={[490, -90, 1900]} scale={1.8}>
        <primitive object={trees.scene}></primitive>
        <primitive object={trees_2.scene}></primitive>
        <primitive object={trees_3.scene}></primitive>
        </mesh>
    )
}