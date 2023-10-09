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
        directionOffset = Math.PI / 2; // d
    } else if (right) {
        directionOffset = -Math.PI / 2;
    }
    // d
    return directionOffset;
};

export default function Character({ refHouse }) {
    const { forward, backward, left, right, jump, shift } = useInput();
    const chickenRef = useRef();
    const model = useGLTF("./models/character/Chiken.glb");
    const { actions } = useAnimations(model.animations, model.scene);
    const actionsRename = Object.keys(actions).map((e, i) => (e = `bones${i}`));
    const renamedAnimations = Object.keys(actions).reduce((acc, key) => {
        const newKey = key.replace("chik|", "");
        acc[newKey] = actions[key];
        return acc;
    }, {});

    // console.log('NUEVO OBJETO', renamedAnimations)
    model.scene.traverse((obj) => {
        if (obj.isMesh) {
            obj.castShadow = true;
        }
    });
    model.scene.scale.set(4, 4, 4);
    const currentAction = useRef("");
    const controlsRef = useRef();
    const camera = useThree((state) => state.camera);

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

        model.scene.position.set(-300, 220, -920);
        camera.position.x += -400;
        camera.position.z += 430;

        cameraTarget.x = model.scene.position.x;

        cameraTarget.y = model.scene.position.y + 2;

        cameraTarget.z = model.scene.position.z;
        if (controlsRef.current) controlsRef.current.target = cameraTarget;
    };

    useEffect(() => {
        initializeCamera();
    }, []);

    useEffect(() => {
        let action = "";
        if (forward || backward || left || right) {
            action = "chikWalk";
            if (backward) {
                action = "chikWalk";
            } else action = "chikWalk";
        }
        if (jump) {
            action = "chikRun";
        }
        if (shift) {
            action = "eat";
        }
        // console.log('ACTIOOOOOON', action)
        if (currentAction.current != action) {
            const nextActionToPlay = renamedAnimations[action];
            // console.log('NEXT ACTION', nextActionToPlay);
            // console.log('CURRENT ACTION', currentAction.current)
            const current = renamedAnimations[currentAction.current];
            // console.log('CURRENT', current)
            current !== undefined && current.fadeOut(0.2);
            nextActionToPlay !== undefined &&
                nextActionToPlay.reset().fadeIn(0.2).play();
            currentAction.current = action;
        }
        // console.log(forward, backward, left, right, jump, shift)
    }, [forward, backward, left, right, jump, shift]);

    // useFrame(() => {

    // });

    useFrame((state, delta) => {
        if (
            currentAction.current == "chikRun" ||
            currentAction.current == "chikWalk"
        ) {
            console.log("REFERENCIA", refHouse);
            if (refHouse !== null) {
                // Obtén las posiciones de los modelos Chicken y House2
                console.log(chickenRef);
                const chickenPosition = model.scene.position;
                const house2Position = refHouse;

                // Define un margen de colisión para determinar la colisión (ajusta esto según tus necesidades)
                const collisionMargin = 1.5;

                // Verifica si el modelo Chicken está encima de la casa
                console.log('CHICKEN X:', chickenPosition.x );
                console.log('HOUSE X:', house2Position.x );
                console.log('CHICKEN Z:', chickenPosition.z );
                console.log('HOUSE Z:', house2Position.z );
                if (
                    chickenPosition.x > house2Position.x - collisionMargin
                    // chickenPosition.x < house2Position.x + collisionMargin
                    // chickenPosition.z > house2Position.z - collisionMargin &&
                    // chickenPosition.z < house2Position.z + collisionMargin
                ) {
                    console.log('SI CASA');
                    let down;
                    // Si hay colisión, eleva la posición del modelo Chicken
                    // chickenPosition.y = chickenPosition.y + 2; // Ajusta la altura de elevación según tus necesidades
                    if(chickenPosition.y >= 65){
                        console.log('BAJOOOO')
                        chickenPosition.y = chickenPosition.y - 2; 
                    } else {
                        console.log('SUBO')
                        chickenPosition.y = chickenPosition.y +2;
                    }
                } else {
                    // Si no hay colisión, mantén la posición original del modelo Chicken
                    // chickenPosition.y = 0;
                    console.log('NO CASA');
                }
            }
            // calculate towards camera direction
            let angleYCameraDirection = Math.atan2(
                camera.position.x - model.scene.position.x,
                camera.position.z - model.scene.position.z
            );
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
            model.scene.quaternion.rotateTowards(rotateQuarternion, 0.2);

            camera.getWorldDirection(walkDirection);
            walkDirection.y = 0;
            walkDirection.normalize();
            walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);

            // run/walk velocit
            const velocity = currentAction.current == "chikRun" ? 100 : 50;

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
        <mesh ref={chickenRef}>
            <OrbitControls ref={controlsRef} maxPolarAngle={Math.PI / 2.3} />
            <primitive ref={chickenRef}  object={model.scene} />
        </mesh>
    );
}