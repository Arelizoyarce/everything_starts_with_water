import { useGLTF } from "@react-three/drei"

export default function House() {
    const model = useGLTF('./models/house/house.glb');
model.scene.position.y = 72;
    model.scene.position.z = 2940;
    model.scene.position.x = -480;
    model.scene.scale.set(15, 15, 15)
    model.scene.rotation.set(0, 2.8, 0)
    return (
<primitive object={model.scene}></primitive>
    )
}