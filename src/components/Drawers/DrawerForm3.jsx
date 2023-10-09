import { Drawer, Button, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import Backdrop from "./Backdrop";
import SplashSpeaking from "./SplashSpeaking";
import backgroundImage from "../../assets/bg-drawer.png";
import CancelIcon from "@mui/icons-material/Cancel";
import { finalQuiz, finalText } from "../../constants";
import FinalQuestion from "../Cards/FinalQuestion";
import IntroCard from "../Cards/IntroCard";
import { openRanking } from "../../redux/actions";
import { useDispatch } from "react-redux";

function DrawerForm3({ isOpen, setIsOpen, handleIncrease, handleDecrease, handleScore, pauseAudio, updatePointPosition }) {
    const dispatch = useDispatch();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');

    const handleOptionChange1 = (event) => setOption1(event.target.value);
    const handleOptionChange2 = (event) => setOption2(event.target.value);
    const handleOptionChange3 = (event) => setOption3(event.target.value);
    const handleOptionChange4 = (event) => setOption4(event.target.value);

    const handleNext = () => {
        if (currentQuestionIndex < 4) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            const sum = parseFloat(option1) + parseFloat(option2) + parseFloat(option3) + parseFloat(option4);
            const arr = [parseFloat(option1), parseFloat(option2), parseFloat(option3), parseFloat(option4)];
            arr.forEach((el) => {
                if (el === 1) {
                    console.log('RESPONDIO 1');
                    handleIncrease()
                } else if (el === 0) {
                    console.log('RESPONDIO 0');
                    handleDecrease();
                }
            })
            console.log('SUMA', sum);
            console.log('FIN');
            handleScore(sum)
            setIsOpen(false);
            updatePointPosition()
            setCurrentQuestionIndex(0);
            setOption1(0);
            setOption2(0);
            setOption3(0);
            setOption4(0);
            dispatch(openRanking(true));
            // SEND TO RANKING
        }
    };

    return (
        <div style={{ position: "relative" }}>
            {isOpen && <Backdrop />}

            <Drawer
                anchor="right"
                open={isOpen}
                onClose={handleNext}
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
                        setIsOpen(false);
                        setCurrentQuestionIndex(0);
                    }}
                    style={{
                        color: "#009FE3",
                        alignSelf: "end",
                        margin: "20px",
                    }}
                >
                    <CancelIcon sx={{ fontSize: "35px" }}></CancelIcon>
                </IconButton>

                {currentQuestionIndex === 0 && (
                    <IntroCard isPlaying={true} pauseAudio={pauseAudio} text={finalText} />
                )}

                {currentQuestionIndex === 1 && (
                    <FinalQuestion
                        question={finalQuiz[0]}
                        handleOptionChange={handleOptionChange1}
                    />
                )}

                {currentQuestionIndex === 2 && (
                    <FinalQuestion
                        question={finalQuiz[1]}
                        handleOptionChange={handleOptionChange2}
                    />
                )}

                {currentQuestionIndex === 3 && (
                    <FinalQuestion
                        question={finalQuiz[2]}
                        handleOptionChange={handleOptionChange3}
                    />
                )}

                {currentQuestionIndex === 4 && (
                    <FinalQuestion
                        question={finalQuiz[3]}
                        handleOptionChange={handleOptionChange4}
                    />
                )}

                <Grid container justifyContent="end">
                    <Button
                        style={{
                            marginTop: "100px",
                            marginRight: "12%",
                            backgroundColor: "white",
                            color: "#009FE3",
                            fontWeight: "bold",
                        }}
                        variant="contained"
                        onClick={handleNext}
                        disabled={
                            (currentQuestionIndex === 1 && option1 === "") ||
                            (currentQuestionIndex === 2 && option2 === "") ||
                            (currentQuestionIndex === 3 && option3 === "") ||
                            (currentQuestionIndex === 4 && option4 === "")
                        }
                    >
                        {currentQuestionIndex === 4 ? "FINISH" : "NEXT"}
                    </Button>
                </Grid>
            </Drawer>
            {isOpen && <SplashSpeaking />}
        </div>
    );
}

export default DrawerForm3;
