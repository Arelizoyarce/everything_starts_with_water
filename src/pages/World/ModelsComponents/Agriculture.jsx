import { useGLTF } from "@react-three/drei"

export default function Agriculture () {
    const appleThree = useGLTF('./models/agriculture/arbol_de_manzana.glb');
    const agriculture = useGLTF('./models/agriculture/cosecha.glb');
    const appleThree_2 = useGLTF('./models/agriculture/arbol_de_manzana_2.glb');
    const appleThree_3 = useGLTF('./models/agriculture/arbol_de_manzana_3.glb');
    const appleThree_4 = useGLTF('./models/agriculture/arbol_de_manzana_4.glb');
    const appleThree_5 = useGLTF('./models/agriculture/arbol_de_manzana_5.glb');
    const appleThree_6 = useGLTF('./models/agriculture/arbol_de_manzana_6.glb');
    const appleThree_7 = useGLTF('./models/agriculture/arbol_de_manzana_7.glb');
    // 1
appleThree.scene.scale.set(40, 40,40);
appleThree.scene.position.y = -57;
appleThree.scene.position.z = -20;
appleThree.scene.position.x = 30;
// 2
appleThree_2.scene.scale.set(40, 40,40);
appleThree_2.scene.position.y = -40;
appleThree_2.scene.position.z = -70;
appleThree_2.scene.position.x = 10;
//3

appleThree_3.scene.scale.set(40, 40,40);
appleThree_3.scene.position.y = -37;
appleThree_3.scene.position.z = -90;
appleThree_3.scene.position.x = 20;
//4
appleThree_4.scene.scale.set(40, 40,40);
appleThree_4.scene.position.y = -59;
appleThree_4.scene.position.z = -60;
appleThree_4.scene.position.x = 150;
//5
appleThree_5.scene.scale.set(40, 40,40);
appleThree_5.scene.position.y = -52;
appleThree_5.scene.position.z = -90;
appleThree_5.scene.position.x = 160;
//6
appleThree_6.scene.scale.set(40, 40,40);
appleThree_6.scene.position.y = -30;
appleThree_6.scene.position.z = -110;
//7

appleThree_7.scene.scale.set(40, 40,40);
appleThree_7.scene.position.y = -36;
appleThree_7.scene.position.z = -130;
appleThree_7.scene.position.x = 60;

//agricultura
    agriculture.scene.scale.set(16,16, 16);
    agriculture.scene.rotation.set(0.15, 0, -0.10)
    agriculture.scene.position.y = -16.7
    
    return (
<mesh position={[-300, 100, 2130]} scale={2.5}>
    <mesh position={[100, 0, -240]}>
<primitive object={appleThree.scene}></primitive>
<primitive object={appleThree_2.scene}></primitive>
<primitive object={appleThree_3.scene}></primitive>
<primitive object={appleThree_4.scene}></primitive>
<primitive object={appleThree_5.scene}></primitive>
<primitive object={appleThree_6.scene}></primitive>
<primitive object={appleThree_7.scene}></primitive>
</mesh>
<primitive object={agriculture.scene}></primitive>
</mesh>
    )
}