import { PerspectiveCamera } from "@react-three/drei";

export default function Camera (){
    return (
<PerspectiveCamera
makeDefault
fov={90}
position={[-100, 800, 900]}/>
    )
}