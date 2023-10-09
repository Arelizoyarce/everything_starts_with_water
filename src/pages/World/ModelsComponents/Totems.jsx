import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import { stories, videorUrls } from "../../../constants";

export default function Totems({ showDrawer1, showDrawer2, showDrawer3 }) {
    const totem_1 = useGLTF("./models/totem.glb");
    const totem_2 = useGLTF("./models/totem copy 2.glb");
    const totem_3 = useGLTF("./models/totem copy 3.glb");
    const totem_4 = useGLTF("./models/totem copy 4.glb");
    const totem_5 = useGLTF("./models/totem copy 5.glb");
    const totem_6 = useGLTF("./models/totem copy 6.glb");
    const totem_7 = useGLTF("./models/totem copy 7.glb");
    const totem_8 = useGLTF("./models/totem copy 8.glb");

    const point_1 = useGLTF('./models/map_point.glb');

    totem_1.scene.position.y = 400;
    totem_1.scene.position.z = -600;
    totem_1.scene.position.x = -40;
    totem_1.scene.scale.set(40, 40, 40);
    totem_1.scene.rotation.set(0, -2.4, 0);

    totem_2.scene.position.y = 500;
    totem_2.scene.position.z = 100;
    totem_2.scene.position.x = -200;
    totem_2.scene.scale.set(40, 40, 40);
    totem_2.scene.rotation.set(0, -3, 0);

    totem_3.scene.position.y = 180;
    totem_3.scene.position.z = 1200;
    totem_3.scene.position.x = 200;
    totem_3.scene.scale.set(40, 40 , 40);
    totem_3.scene.rotation.set(0, -3.2 , 0);

    totem_4.scene.position.y = 180;
    totem_4.scene.position.z = 1650;
    totem_4.scene.position.x = 450;
    totem_4.scene.scale.set(40, 40, 40);
    totem_4.scene.rotation.set(0, -2.3, 0);

    totem_5.scene.position.y = 180;
    totem_5.scene.position.z = 1850;
    totem_5.scene.position.x = -350;
    totem_5.scene.scale.set(40, 40, 40);
    totem_5.scene.rotation.set(0, 2.3, 0);

    totem_6.scene.position.y = 180;
    totem_6.scene.position.z = 2700;
    totem_6.scene.position.x = -450;
    totem_6.scene.scale.set(40, 40, 40);
    totem_6.scene.rotation.set(0, 2.3, 0);

    totem_7.scene.position.y = 180;
    totem_7.scene.position.z = 1000;
    totem_7.scene.position.x = -640;
    totem_7.scene.scale.set(40, 40 , 40);
    totem_7.scene.rotation.set(0, 2.0 , 0);

    totem_8.scene.position.y = 180;
    totem_8.scene.position.z = 3000;
    totem_8.scene.position.x = 400;
    totem_8.scene.scale.set(40, 40, 40);
    totem_8.scene.rotation.set(0, -2.3, 0);
    const [hovered, setHovered] = useState(null)

    useEffect(() => {
      document.body.style.cursor = hovered !== null ? 'pointer' : 'auto'
    }, [hovered])
    return (
        <mesh>
            
            <group onClick={() => showDrawer1(videorUrls[0], 1)} onPointerOver={() => setHovered(1)}
    onPointerOut={() => setHovered(null)}>
                <primitive object={totem_1.scene}></primitive>
            </group>
            <group onClick={() => showDrawer1(videorUrls[1])} onPointerOver={() => setHovered(1)}
    onPointerOut={() => setHovered(null)}>
                <primitive object={totem_2.scene}></primitive>
            </group>
            <group onClick={() => showDrawer2(stories.deforestation)} onPointerOver={() => setHovered(1)}
    onPointerOut={() => setHovered(null)}>
                <primitive object={totem_3.scene}></primitive>
            </group>
            <group onClick={() => showDrawer2(stories.forest_fires)} onPointerOver={() => setHovered(1)}
    onPointerOut={() => setHovered(null)}>
                <primitive object={totem_4.scene}></primitive>
            </group>
            <group onClick={() => showDrawer2(stories.agriculture)} onPointerOver={() => setHovered(1)}
    onPointerOut={() => setHovered(null)}>
                <primitive object={totem_5.scene}></primitive>
            </group>
            <group onClick={() => showDrawer2(stories.household_consumption)} onPointerOver={() => setHovered(1)}
    onPointerOut={() => setHovered(null)}>
                <primitive object={totem_6.scene}></primitive>
            </group>
            <group onClick={() => showDrawer1(videorUrls[2])} onPointerOver={() => setHovered(1)}
    onPointerOut={() => setHovered(null)}>
                <primitive object={totem_7.scene}></primitive>
            </group>
            <group onClick={() => showDrawer3()} onPointerOver={() => setHovered(1)}
    onPointerOut={() => setHovered(null)}>
                <primitive object={totem_8.scene}></primitive>
            </group>
        </mesh>
    );
}
