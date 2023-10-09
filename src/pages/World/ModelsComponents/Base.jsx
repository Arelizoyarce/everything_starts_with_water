import { useGLTF } from "@react-three/drei"

export default function BaseModel() {
    const model = useGLTF('./models/scene2.glb');
    model.scene.position.y = 20;
    model.scene.position.z = 2400;
    model.scene.scale.set(20, 20, 20)
    model.scene.rotation.set(0, 3.1, 0)
    return (
<primitive object={model.scene}></primitive>
    )
}