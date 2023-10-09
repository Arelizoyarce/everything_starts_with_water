import { Canvas } from "@react-three/fiber";
import DrawerForm1 from "../../components/Drawers/DrawerForm1";
import { stories, videorUrls } from "../../constants";
import DrawerForm2 from "../../components/Drawers/DrawerForm2";
import Lights from "./CanvaComponets/Lights";
import Camera from "./CanvaComponets/Camera";
import { OrbitControls } from "@react-three/drei";
import BaseModel from "./ModelsComponents/Base";
import Mountains from "./ModelsComponents/Mountains";
import TreeSection from "./ModelsComponents/TreeSection";
import Agriculture from "./ModelsComponents/Agriculture";
import BurnedTress from "./ModelsComponents/BurnedTress";
import Deforest from "./ModelsComponents/Deforest";
import Character from "./CharacterComponents/Character";
import House from "./ModelsComponents/House";
import { useState } from "react";
import ReactHowler from "react-howler";
import Totems from "./ModelsComponents/Totems";
import Gota from "./CharacterComponents/Gota";
import WaterBar from "../../components/WaterBar";
import Trash from "./ModelsComponents/Trash";
import FinalCard from "../../components/FinalCard";
import TreeSectionTwo from "./ModelsComponents/TreeSection_2";
import { TreeModelTwo } from "./ModelsComponents/TreeModel_2";
import Point from "./ModelsComponents/Point";
import DrawerForm3 from "../../components/Drawers/DrawerForm3";
import { useSelector } from "react-redux";

export default function WorldPage() {
    const [videoUrl, setVideoUrl] = useState("");
    const [storyForm2, setStory2] = useState(stories.deforestation);
    const [openDrawer1, setOpenDrawer1] = useState(false);
    const [openDrawer2, setOpenDrawer2] = useState(false);
    const [openDrawer3, setOpenDrawer3] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioUrl, setAudioUrl] = useState("/4.1.wav");
    // const positions ={
    //     1: [-120, 310, -590],
    //     2: [-190, 376, 0],
    //     3: [-610, 70, 900],
    //     4: [210, 30, 1150],
    //     5: [-310, 65, 1800],
    //     6: [-610, 50, 2500],
    //     // tokem 8
    //     7: [410, 50, 2900],
    //     // arboles incendiados
    //     8: [410, 30, 1490]
    // }

    const positionPoints =[[-120, 310, -590], [-190, 376, 0], [-610, 70, 900],[210, 30, 1150],[410, 30, 1490],[-310, 65, 1800],[-610, 50, 2500],[410, 50, 2900],]
    const [position, setPositionPoint] = useState([-120, 310, -590]);
    const [score, setScore] = useState(0);
    const openRanking = useSelector((state) => state.general.openRanking);
    const [value, setValue] = useState(0)

    const handleScore = (newScore) => setScore(score + newScore);

    const playAudio = () => setIsPlaying(true);

    const pauseAudio = () => setIsPlaying(false);

    const handleAudioEnded = () => setIsPlaying(false);

    const showDrawer1 = (videoUrl, value) => {
        // PARAMETER
        console.log("OPEN");
        console.log("VIDEO URL", videoUrl);
        setVideoUrl(videoUrl);
        const open = openDrawer1;
        console.log('CONSTOPNE', open)
        setOpenDrawer1(!openDrawer1);
    };

    const updatePointPosition =()=> {
        if(value !== 7){
            console.log('VALUE', value, positionPoints[value + 1])
            setPositionPoint(positionPoints[value + 1]);
            setValue(value + 1)
        }
    }

    const showDrawer2 = (story) => {
        // PARAMETER
        setAudioUrl(story.audios[0]);
        setStory2(story);
        setOpenDrawer2(true);
        playAudio();
    };

    const showDrawer3 = () => {
        setAudioUrl('/8.1.wav');
        setOpenDrawer3(true);
        playAudio();
    };

    const handleIncrease = () => {
        console.log("INCREASE");
        var progressElement = document.getElementById("progress");
        var fillElement = document.getElementById("fill");

        var currentProgress = parseInt(progressElement.innerText);
        console.log("CURRENT PROGRESS", currentProgress);
        if (currentProgress < 100) {
            console.log("AUMENTO");
            currentProgress += 10;
            console.log("CURRENT PROGRESS LUEGO DE AUMENTAR", currentProgress);
            progressElement.innerText = currentProgress + "%";
            fillElement.style.width = currentProgress + "%";
        }
    };

    const handleDecrease = () => {
        console.log("DECREASE");
        var progressElement = document.getElementById("progress");
        var fillElement = document.getElementById("fill");

        var currentProgress = parseInt(progressElement.innerText);
        if (currentProgress > 20) {
            currentProgress -= 10;
            progressElement.innerText = currentProgress + "%";
            fillElement.style.width = currentProgress + "%";
        }
    };

    return (
        <div
            style={{
                height: "100vh",
                width: "100%",
                background: "linear-gradient(to bottom, #87CEEB, #1E70FF 20%)",
                position: "relative",
            }}
        >
            {/* HTML */}
            <WaterBar />
            {
                openRanking && (
                    <FinalCard score={score.toString()} />
                )
            }
            {/* <button style={{ marginTop: 20 }} onClick={handleClick}>si</button>
            <button style={{ marginTop: 20 }} onClick={handleClickDecrease}>no</button> */}
            <div>
                <DrawerForm1
                    videoUrl={videoUrl}
                    open={openDrawer1}
                    handleOpen={showDrawer1}
                    updatePointPosition={updatePointPosition}
                />
                <DrawerForm2
                    setIsPlaying={setIsPlaying}
                    setAudioUrl={setAudioUrl}
                    story={storyForm2}
                    isOpen={openDrawer2}
                    setIsOpen={setOpenDrawer2}
                    isPlaying={isPlaying}
                    pauseAudio={pauseAudio}
                    playAudio={playAudio}
                    handleIncrease={handleIncrease}
                    handleDecrease={handleDecrease}
                    handleScore={handleScore}
                    updatePointPosition={updatePointPosition}
                />
                <DrawerForm3
                    isOpen={openDrawer3}
                    setIsOpen={setOpenDrawer3}
                    handleIncrease={handleIncrease}
                    handleDecrease={handleDecrease}
                    handleScore={handleScore}
                    pauseAudio={pauseAudio}
                    updatePointPosition={updatePointPosition}
                />
                <ReactHowler
                    playing={isPlaying}
                    src={audioUrl}
                    onEnd={handleAudioEnded}
                />
            </div>
            {/* //RAMA MASTER */}
            <Canvas shadows>
                <Lights></Lights>
                {/* <Camera></Camera>
            <OrbitControls></OrbitControls> */}
                {/* <Character></Character> */}
                <Totems
                    showDrawer1={showDrawer1}
                    showDrawer2={showDrawer2}
                    showDrawer3={showDrawer3}
                ></Totems>
                <Gota></Gota>
                <Point position={position}></Point>
                <TreeSectionTwo></TreeSectionTwo>
                <TreeSection></TreeSection>
                <BurnedTress></BurnedTress>
                <Agriculture></Agriculture>
                <Deforest></Deforest>
                <Mountains></Mountains>
                <House></House>
                <BaseModel></BaseModel>
                <mesh rotation-x={Math.PI * -0.5} receiveShadow>
                    <planeGeometry args={[1000, 1000]} />
                    <meshStandardMaterial color={"rgb(118, 217, 111)"} />
                </mesh>
            </Canvas>
        </div>
    );
}
