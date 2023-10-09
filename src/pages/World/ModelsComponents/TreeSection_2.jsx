import { useGLTF } from "@react-three/drei"
import { useEffect, useState } from "react";
import { TreeModelTwo } from "./TreeModel_2";

export default function TreeSectionTwo() {
    const treesMontains = [
        {
            y: 200,
            x: -350,
            z: -300,
            scale: 700,
        },
        {
            y: 216,
            x: -330,
            z: 500,
            scale: 700,
        },
        {
            y: -54,
            x: 240,
            z: 600,
            scale: 700,
        },
        {
            y: -60,
            x: 200,
            z: 970,
            scale: 700,
        },        {
            y: 140,
            x: -70,
            z: 600,
            scale: 700,
        },       
        {
            y: -150,
            x: 600,
            z: 400,
            scale: 700,
        },
        {
            y: -90,
            x: 650,
            z: 1050,
            scale: 700,
        },
        
    ];
    return(
        <group>
        <mesh position={[-700, 0, 0]}>
            {treesMontains.map((t)=>{
                return (
                    <TreeModelTwo castShadow position={[t.x, t.y, t.z]} scale={500}></TreeModelTwo>
                )
            })}
        </mesh>
        </group>
        
    )
}