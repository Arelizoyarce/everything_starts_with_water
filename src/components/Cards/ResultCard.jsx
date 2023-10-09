import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import garbageAngry from "../../assets/garbage_angry.png";
import splashAngry from "../../assets/splash_angry.png";
import { useState, useEffect } from "react";

function ResultCard({ isCorrect, dialogue, isPlaying }) {
    const image = isCorrect ? garbageAngry : splashAngry;
    const [typedText, setTypedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typedText2, setTypedText2] = useState("");
    const [currentIndex2, setCurrentIndex2] = useState(0);

    useEffect(() => {
        let typingInterval;

        if (isPlaying) {
            typingInterval = setInterval(() => {
                const textToType = dialogue[0];
                
                const textToType2 = dialogue[1];
                if (currentIndex < textToType.length) {
                    const char = textToType.charAt(currentIndex);
                    setTypedText((prevTypedText) => prevTypedText + char);
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                } else if (
                    currentIndex === textToType.length &&
                    currentIndex2 < textToType2.length
                ) {
                    const char2 = textToType2.charAt(currentIndex2);
                    setTypedText2((prevTypedText) => prevTypedText + char2);
                    setCurrentIndex2((prevIndex) => prevIndex + 1);
                }
            }, 50); // Velocidad (en milisegundos)
        } else {
            clearInterval(typingInterval);
        }
        return () => {
            clearInterval(typingInterval);
        };
    }, [isPlaying, currentIndex, currentIndex2, dialogue]);
    return (
        <Grid
            container
            justifyContent="space-evenly"
            direction="column"
            height="60%"
            wrap="no-wrap"
        >
            <Card
                sx={{
                    width: "40%",
                    height: "2%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'center',
                    padding: '70px',
                    backgroundColor: isCorrect ? '#EAF9FF' : '#EBE8FF',
                    marginLeft:'5%'
                }}
            >
                <Typography style={{fontSize: '20px'}} variant="subtitle1">{typedText}</Typography>
            </Card>
            <Grid container item direction="row">
                <Card
                    sx={{
                        width: "40%",
                        height: "2%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'center',
                        padding: '70px',
                        backgroundColor: !isCorrect ? '#EAF9FF' : '#EBE8FF',
                        marginLeft:'17%'
                    }}
                >
                    <Typography style={{fontSize: '20px',  fontWeight: 600}} variant="subtitle1">{typedText2 ===  '' ? '...' : typedText2}</Typography>
                </Card>
                <img
                    style={{ transform: "scaleX(-1)" }}
                    src={image}
                    alt="Imagen"
                    width={250}
                />
            </Grid>
        </Grid>
    );
}

export default ResultCard;
