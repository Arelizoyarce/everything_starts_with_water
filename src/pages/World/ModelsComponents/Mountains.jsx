import { useGLTF } from "@react-three/drei"

export default function Mountains() {
    const mountain_1 = useGLTF('./models/nevadoModel.glb');
    const mountain_2 = useGLTF('./models/nevadoModel_2.glb');
    const mountain_3 = useGLTF('./models/nevadoModel_3.glb');
    const mountain_4 = useGLTF('./models/nevadoModel_4.glb');
    const mountain_5 = useGLTF('./models/nevadoModel_5.glb');
    const mountain_6 = useGLTF('./models/nevadoModel_6.glb');
    const mountain_7 = useGLTF('./models/nevadoModel_7.glb');
    // mountain 1
    mountain_1.scene.position.y = -30;
    mountain_1.scene.position.x = -160;
    mountain_1.scene.position.z = 80;
    mountain_1.scene.scale.set(400, 400, 400)

    //mountain 2
    mountain_2.scene.position.y=-10;
    mountain_2.scene.position.x=130;
    mountain_2.scene.position.z=-250
    mountain_2.scene.scale.set(400, 800, 400)

    // 3
    mountain_3.scene.position.y =20;
    mountain_3.scene.position.z= 80;
    mountain_3.scene.position.x= -120;
    mountain_3.scene.scale.set(300, 300, 300)

    //4
    mountain_4.scene.position.y =-67;
    mountain_4.scene.position.z= -80;
    mountain_4.scene.position.x=-280;
    mountain_4.scene.scale.set(500, 500, 500)

    // 5
    mountain_5.scene.position.y = 177;
    mountain_5.scene.position.x = -420;
    mountain_5.scene.position.z = -200;
    mountain_5.scene.rotation.set(0, 0, -0.04);
    mountain_5.scene.scale.set(250, 250, 250)
    // 6
    mountain_6.scene.position.y = 30;
    mountain_6.scene.position.x = 100;
    mountain_6.scene.position.z = -140;
    mountain_6.scene.scale.set(260, 260, 260)

    // 7
    mountain_7.scene.position.y = -58;
    mountain_7.scene.position.x= -460;
    mountain_7.scene.position.z= 100;
    mountain_7.scene.scale.set(500, 500, 400)

    return (
        <mesh position={[-880, -430, -250]} scale={4}>
<primitive object={mountain_1.scene}></primitive>
{/* <primitive object={mountain_2.scene}></primitive> */}
<primitive object={mountain_3.scene}></primitive>
<primitive object={mountain_4.scene}></primitive>
{/* <primitive object={mountain_5.scene}></primitive> */}
{/* <primitive object={mountain_6.scene}></primitive> */}
<primitive object={mountain_7.scene}></primitive>
</mesh>
    )
}