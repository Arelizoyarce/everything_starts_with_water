import { Box, Card, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function IntroCard({ text, isPlaying, pauseAudio, playAudio }) {
    const [typedText, setTypedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let typingInterval;

        if (isPlaying) {
            typingInterval = setInterval(() => {
                const textToType = text;
                if (currentIndex < textToType.length) {
                    const char = textToType.charAt(currentIndex);
                    setTypedText((prevTypedText) => prevTypedText + char);
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                }
            }, 50); // Velocidad (en milisegundos)
        } else {
            clearInterval(typingInterval);
        }
        return () => {
            clearInterval(typingInterval);
        };
    }, [isPlaying, currentIndex, text]);

    return (
        <Grid container justifyContent="center" height="40%">
            <Card
                sx={{
                    width: "70%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    padding: '70px',
                    backgroundColor: '#EAF9FF'
                }}
            >
                <Grid container direction="column">
                    <Box>
                        <Typography style={{fontSize: '20px'}} variant="subtitle1">{typedText}</Typography>
                    </Box>
                </Grid>
            </Card>
        </Grid>
    );
}

export default IntroCard;
