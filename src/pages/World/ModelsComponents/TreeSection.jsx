import { useGLTF } from "@react-three/drei"
import { useEffect, useState } from "react";
import { TreeModelOne } from "./TreeModel_1";

// function TreeOne({props}) {
//     const model = useGLTF('./models/backgroundModel.glb');
//     model.scene.position.y = props.position.y;
//     model.scene.scale.set(props.scale.x, props.scale.y, props.scale.z)
//     return (
// <primitive object={model.scene}></primitive>
//     )
// }
export default function TreeSection() {

    const treesArray = [
        {
            y: 10,
            x: 30,
            z: 350,
            scale: 700,
        },
        {
            y: 0,
            x: -600,
            z: 900,
            scale: 700,
        },
        {
            y: 0,
            x: 200,
            z: 600,
            scale: 700,
        },
        {
            y: 0,
            x: 200,
            z: 870,
            scale: 700,
        },        {
            y: 18,
            x: -1000,
            z: 600,
            scale: 700,
        },        {
            y: 10,
            x: 200,
            z: 290,
            scale: 700,
        },
        {
            y: 0,
            x: -75,
            z: 650,
            scale: 700,
        },
        
    ];
    const treesMontains = [
        {
            y: 120,
            x: -300,
            z: 350,
            scale: 700,
        },
        {
            y: 67,
            x: -100,
            z: 1200,
            scale: 700,
        },
        {
            y: 20,
            x: 240,
            z: 600,
            scale: 700,
        },
        {
            y: 30,
            x: 200,
            z: 970,
            scale: 700,
        },        {
            y: 67,
            x: -70,
            z: 800,
            scale: 700,
        },        {
            y: -20,
            x: 200,
            z: 290,
            scale: 700,
        },
        {
            y: 110,
            x: -165,
            z: 550,
            scale: 700,
        },
        
    ];
    const treesHouses = [
        {
            y: -5,
            x: 30,
            z: 350,
            scale: 700,
        },
        {
            y: -15,
            x: -800,
            z: 500,
            scale: 700,
        },
        {
            y: -20,
            x: -740,
            z: 450,
            scale: 700,
        },
        {
            y:7,
            x: 200,
            z: 970,
            scale: 700,
        },        {
            y: 0,
            x: -70,
            z: 1150,
            scale: 700,
        },        {
            y: 5,
            x: 200,
            z: 290,
            scale: 700,
        },
        {
            y: 8,
            x: -465,
            z: 1090,
            scale: 700,
        },
        
    ];
    return(
        <group>
        <mesh position={[700, -170, 2200]}>
            {treesArray.map((t)=>{
                return (
                    <TreeModelOne castShadow position={[t.x, t.y, t.z]} scale={t.scale}></TreeModelOne>
                )
            })}
        </mesh>
        <mesh position={[700, -170, 1200]}>
            {treesMontains.map((t)=>{
                return (
                    <TreeModelOne castShadow position={[t.x, t.y, t.z]} scale={t.scale}></TreeModelOne>
                )
            })}
        </mesh>
        <mesh position={[700, -170, 3500]}>
            {treesHouses.map((t)=>{
                return (
                    <TreeModelOne castShadow position={[t.x, t.y, t.z]} scale={t.scale}></TreeModelOne>
                )
            })}
        </mesh>
        {/* <mesh position={[849, -143, 2700]}>
            {trees.map((t)=>{
                return (
                    <TreeModelOne castShadow position={[t.position.x, t.position.y, t.position.z]} scale={t.scale}></TreeModelOne>
                )
            })}
        </mesh> */}
        </group>
        
    )
}