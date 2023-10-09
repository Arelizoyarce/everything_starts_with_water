import { useEffect, useRef } from "react";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useInput } from "../../../hooks/useInput";
let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuarternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();

const directionOffset = ({ forward, backward, left, right }) => {
    var directionOffset = 0;
    if (forward) {
        if (left) {
            directionOffset = Math.PI / 4; // w+a
        } else if (right) {
            directionOffset = -Math.PI / 4; // w+d
        }
    } else if (backward) {
        if (left) {
            directionOffset = Math.PI / 4 + Math.PI / 2; // s+a
        } else if (right) {
            directionOffset = -Math.PI / 4 - Math.PI / 2; // s+d
        } else {
            directionOffset = Math.PI; // S
        }
    } else if (left) {
        directionOffset = Math.PI / 6; // d
    } else if (right) {
        directionOffset = -Math.PI / 9;
    }
    // d
    return directionOffset;
};

export default function Gota(){
    console.log('GOTA');
    const model = useGLTF('./models/character/personaje.gltf');
    const { forward, backward, left, right, jump, shift } = useInput();
    model.scene.scale.set(60, 60, 60)
    model.scene.traverse((obj) => {
        if (obj.isMesh) {
            obj.castShadow = true;
        }
    });
    const camera = useThree((state) => state.camera);
    const controlsRef = useRef();

    const updateCameraTarget = (moveX, moveZ) => {
        camera.position.x += moveX;
        camera.position.z += moveZ;

        cameraTarget.x = model.scene.position.x;

        cameraTarget.y = model.scene.position.y + 2;

        cameraTarget.z = model.scene.position.z;
        if (controlsRef.current) controlsRef.current.target = cameraTarget;
    };

    const initializeCamera = () => {
        console.log("INITIALIZE CAMERA");

        model.scene.position.set(-300, 350, -500);
        camera.position.x += -300
        camera.position.z += -900;
        camera.position.y += 350;
        // camera.fov = 120;
        // camera.far = 100

        cameraTarget.x = model.scene.position.x;

        cameraTarget.y = model.scene.position.y;

        cameraTarget.z = model.scene.position.z;
        if (controlsRef.current) controlsRef.current.target = cameraTarget;
    };

    useEffect(() => {
        initializeCamera();
    }, []);

    // useEffect(() => {
    //     let action = "";
    //     if (forward || backward || left || right) {
    //         action = "chikWalk";
    //         if (backward) {
    //             action = "chikWalk";
    //         } else action = "chikWalk";
    //     }
    //     if (jump) {
    //         action = "chikRun";
    //     }
    //     if (shift) {
    //         action = "eat";
    //     }
    //     // console.log('ACTIOOOOOON', action)
    //     if (currentAction.current != action) {
    //         const nextActionToPlay = renamedAnimations[action];
    //         // console.log('NEXT ACTION', nextActionToPlay);
    //         // console.log('CURRENT ACTION', currentAction.current)
    //         const current = renamedAnimations[currentAction.current];
    //         // console.log('CURRENT', current)
    //         current !== undefined && current.fadeOut(0.2);
    //         nextActionToPlay !== undefined &&
    //             nextActionToPlay.reset().fadeIn(0.2).play();
    //         currentAction.current = action;
    //     }
    //     // console.log(forward, backward, left, right, jump, shift)
    // }, [forward, backward, left, right, jump, shift]);

    // useFrame(() => {

    // });

    useFrame((state, delta) => {
        if (
            forward || backward || left || right
        ) {
            // calculate towards camera direction

            if(model.scene.position.z > 350 && model.scene.position.z < 550 ){
model.scene.position.y = model.scene.position.y - 1
            }
            // if(backward && model.scene.position.z < -250 ){
            //     model.scene.position.y = model.scene.position.y + 2
            //                 }

            
            let angleYCameraDirection = Math.atan2(
                camera.position.x - model.scene.position.x,
                camera.position.z - model.scene.position.z
            );
            console.log('CAMARA DIRECTION',angleYCameraDirection)
            // diagonal movement angle offset
            let newDirectionOffset = directionOffset({
                forward,
                backward,
                left,
                right,
            });

            console.log("newDirectionOffset", newDirectionOffset);
            // calculate direction

            console.log(
                "ROTATE",
                rotateAngle,
                angleYCameraDirection + newDirectionOffset
            );
            rotateQuarternion.setFromAxisAngle(
                rotateAngle,
                angleYCameraDirection + newDirectionOffset + 3
            );

            // console.log('rotateQuarternion', rotateQuarternion);
            model.scene.quaternion.setFromAxisAngle(
                rotateAngle,
                angleYCameraDirection + newDirectionOffset + 3
            );

            

            camera.getWorldDirection(walkDirection);
            walkDirection.y = 0;
            walkDirection.normalize();
            walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);

            // run/walk velocit
            const velocity = 250;

            // move model & camera

            const moveX = walkDirection.x * velocity * delta;
            const moveZ = walkDirection.z * velocity * delta;
            const newX = model.scene.position.x + moveX;

            // Verificar los límites antes de actualizar la posición en x
            // if (newX <= 1000 && newX >= -1000) {
            model.scene.position.x = newX;
            model.scene.position.z += moveZ;
            updateCameraTarget(moveX, moveZ);
            console.log("Chicken Position:", model.scene.position);
            // }
        }
    });
    return (
        <><OrbitControls ref={controlsRef} maxPolarAngle={Math.PI / 3}
        enableDamping={true}
        dampingFactor={0.05}
        /><primitive object={model.scene}></primitive></>
    )
}