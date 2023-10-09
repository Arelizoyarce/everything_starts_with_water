import { useGLTF } from "@react-three/drei";

export default function Trash ( ){
    const model_1 = useGLTF('./models/basura/bag.glb');
    model_1.scene.rotation.set(0, 0, -0.9)
    model_1.scene.position.y = -24
    model_1.scene.position.x = -24
    const model_2 = useGLTF('./models/basura/batle1.glb');
    model_2.scene.position.y = 0;
    model_2.scene.position.z = 50
    model_2.scene.position.x = 50
    const model_3 = useGLTF('./models/basura/batle2.glb');
    model_3.scene.position.y = -30;
    model_3.scene.position.z = 60
    model_3.scene.position.x = 70
    model_3.scene.rotation.set(0, 0, -0.9)
    const model_4 = useGLTF('./models/basura/carton1.glb');
    model_4.scene.position.y = -14;
    model_4.scene.position.z = 60
    model_4.scene.position.x = 70
    model_4.scene.rotation.set(0, 0, 0.9)
    const model_5 = useGLTF('./models/basura/carton2.glb');
    model_5.scene.position.y = -9;
    model_5.scene.position.z = 50
    model_5.scene.position.x = 20
    model_5.scene.rotation.set(0, 0, 0.9)
    // const model_6 = useGLTF('./models/basura/glass.glb');
    // model_6.scene.position.y = 10;
    // model_6.scene.position.z = 50
    // model_6.scene.position.x = 20
    // // model_6.scene.rotation.set(0, 0, 0.9)
    const model_7 = useGLTF('./models/basura/lata1.glb');
    model_7.scene.position.y = 0;
    model_7.scene.position.z = 20
    model_7.scene.position.x = -20
    model_7.scene.rotation.set(0, 0, -0.9)
    const model_8 = useGLTF('./models/basura/lata2.glb');
    model_8.scene.position.y = 3;
    model_8.scene.position.z = 75
    model_8.scene.position.x = 50
    model_8.scene.rotation.set(0, 0, 0.9)
    const model_9 = useGLTF('./models/basura/paper.glb');
    model_9.scene.position.y = 2;
    model_9.scene.position.z = 30
    model_9.scene.position.x = -20
    // model_9.scene.rotation.set(0, 0, 0.9)
    return (
        <mesh scale={4} position={[-400, 0, 1400]}>
        <primitive object={model_1.scene}></primitive>
        <primitive object={model_2.scene}></primitive>
        <primitive object={model_3.scene}></primitive>
        <primitive object={model_4.scene}></primitive>
        <primitive object={model_5.scene}></primitive>
        {/* <primitive object={model_6.scene}></primitive> */}
        <primitive object={model_7.scene}></primitive>
        <primitive object={model_8.scene}></primitive>
        <primitive object={model_9.scene}></primitive>
        </mesh>
    )
}