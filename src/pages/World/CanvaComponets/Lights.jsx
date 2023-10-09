import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

export default function Lights (){
    const lightRef = useRef(null);

    useHelper(lightRef, DirectionalLightHelper, 6, "white")
    return (
        <><ambientLight intensity={0.7} color={'white'}/><directionalLight position={[-200, 300, 1800]} scale={50}  ref={lightRef}  castShadow
        /></>
    )
}