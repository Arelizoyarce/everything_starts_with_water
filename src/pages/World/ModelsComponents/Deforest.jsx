import { useGLTF } from "@react-three/drei"

export default function Deforest() {
    const model = useGLTF('./models/deforest/deforest_1.glb');
    model.scene.position.y = -30;
    model.scene.position.x = -320;
    model.scene.position.z = 1560;
    model.scene.scale.set(80, 80, 80);
    model.scene.rotation.set(0, Math.PI/0.82, -0.08)
    // model.scene.scale.set(40, 40, 42)
    return (
<primitive object={model.scene}></primitive>
    )
}