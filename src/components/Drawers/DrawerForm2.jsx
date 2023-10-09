import { Drawer, Button, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import Backdrop from "./Backdrop";
import SplashSpeaking from "./SplashSpeaking";
import IntroCard from "../Cards/IntroCard";
import QuestionsCard from "../Cards/QuestionsCard";
import ResultCard from "../Cards/ResultCard";
import GarbageSpeaking from "./GarbageSpeaking";
import backgroundImage from "../../assets/bg-drawer.png";
import CancelIcon from "@mui/icons-material/Cancel";

function DrawerForm2({
    story,
    isOpen,
    setIsOpen,
    isPlaying,
    playAudio,
    pauseAudio,
    setAudioUrl,
    setIsPlaying,
    handleIncrease,
    handleDecrease,
    handleScore,
    updatePointPosition
}) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");

    const intro = story.splash_intro;
    const correctAnswerIndex = story.splash_quiz.options.findIndex(
        (option) => option.isCorrect
    );
    const selectedAnswer = story.splash_quiz.options[parseInt(selectedOption, 10)];
    const isCorrect = parseInt(selectedOption, 10) === correctAnswerIndex;

    const handleOptionChange = (event) => setSelectedOption(event.target.value);

    const handleOpen = () => {
        if (currentTextIndex < intro.length + 1) {
            setIsPlaying(true);
            setCurrentTextIndex(currentTextIndex + 1);
            // IS FINAL VIEW
            if (currentTextIndex === intro.length) {
                console.log('PREGUNTA ELEGIDA', selectedAnswer);
                handleScore(selectedAnswer.score)
                if (isCorrect) {
                    console.log('RESPONDIO CORRECTAMENTE');
                    setAudioUrl(story.audios[currentTextIndex + 1]);
                    handleIncrease();
                } else {
                    console.log('RESPONDIO INCORRECTAMENTE');
                    setAudioUrl(story.audios[currentTextIndex + 2]);
                    handleDecrease();
                }
            } else {
                setAudioUrl(story.audios[currentTextIndex + 1]);
            }
        } else {
            setIsOpen(false);
            setCurrentTextIndex(0);
            setSelectedOption("");
            setIsPlaying(false);
            updatePointPosition()
            //meter funcion que actualiza
        }
    };

    return (
        <div style={{ position: "relative" }}>
            {isOpen && <Backdrop />}

            <Drawer
                anchor="right"
                open={isOpen}
                onClose={handleOpen}
                PaperProps={{
                    sx: {
                        width: "60%",
                        position: "absolute",
                        textAlign: "center",
                        zIndex: 3,
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: "100% 100%",
                    },
                }}
                style={{ position: "inherit" }}
            >
                <IconButton
                    onClick={() => {
                        setIsOpen(false)
                        setCurrentTextIndex(0);
                        setSelectedOption("");
                        setIsPlaying(false);
                    }}
                    style={{
                        color: "#009FE3",
                        alignSelf: "end",
                        margin: "20px",
                    }}
                >
                    <CancelIcon sx={{ fontSize: "35px" }}></CancelIcon>
                </IconButton>
                {/* Show intro texts */}
                {currentTextIndex === 0 && (
                    <IntroCard
                        text={intro[0].text}
                        audioUrl={intro[0].audio}
                        isPlaying={isPlaying}
                        pauseAudio={pauseAudio}
                        playAudio={playAudio}
                    />
                )}

                {currentTextIndex === 1 && (
                    <IntroCard
                        text={intro[1].text}
                        audioUrl={intro[1].audio}
                        isPlaying={isPlaying}
                        pauseAudio={pauseAudio}
                        playAudio={playAudio}
                    />
                )}

                {/* Show second component after showing all intro texts */}
                {currentTextIndex === intro.length && (
                    <QuestionsCard
                        questions={story.splash_quiz}
                        handleOptionChange={handleOptionChange}
                        isPlaying={isPlaying}
                    />
                )}

                {/* Show third component after showing questions component */}
                {currentTextIndex === intro.length + 1 && (
                    <ResultCard
                        isCorrect={isCorrect}
                        dialogue={
                            isCorrect
                                ? story.final_dialogue.correct
                                : story.final_dialogue.incorrect
                        }
                        isPlaying={isPlaying}
                    />
                )}

                <Grid container justifyContent="end">
                    {!isPlaying && (
                        <Button
                            style={{
                                marginTop: "100px",
                                marginRight: "12%",
                                backgroundColor: "white",
                                color: "#009FE3",
                                fontWeight: "bold",
                            }}
                            variant="contained"
                            onClick={handleOpen}
                            disabled={
                                currentTextIndex === intro.length &&
                                selectedOption === ""
                            }
                        >
                            {currentTextIndex === intro.length + 1
                                ? "CLOSE"
                                : "NEXT"}
                        </Button>
                    )}
                </Grid>
            </Drawer>
            {isOpen &&
                (currentTextIndex === intro.length + 1 && !isCorrect ? (
                    <GarbageSpeaking />
                ) : (
                    <SplashSpeaking />
                ))}
        </div>
    );
}

export default DrawerForm2;
