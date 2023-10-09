import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Card, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useEffect, useState } from 'react';

function QuestionsCard({ questions, handleOptionChange, isPlaying }) {
    const [typedText, setTypedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let typingInterval;

        if (isPlaying) {
            typingInterval = setInterval(() => {
                const textToType = questions.question;
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
    }, [isPlaying, currentIndex, questions.question]);
    return (
        <Grid
            container
            justifyContent="space-evenly"
            direction="column"
            alignItems='center'
            height="55%"
        >
            <Card
                sx={{
                    width: "70%",
                    height: "2%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'center',
                    padding: '70px',
                    backgroundColor: '#EAF9FF'
                }}
            >
                <Typography style={{fontSize: '20px', fontWeight: 600}} variant="subtitle1">
                    {typedText}
                </Typography>
            </Card>
            <Card
                sx={{
                    width: "70%",
                    height: "18%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'center',
                    padding: '70px',
                    backgroundColor: '#EAF9FF'
                }}
            >
            <RadioGroup
                name="answer"
                onChange={handleOptionChange}
            >
                {questions.options.map((q, i) => {
                    return (
                        <FormControlLabel
                            value={i}
                            control={<Radio />}
                            label={q.text}
                        />
                    );
                })}
            </RadioGroup>
            </Card>
        </Grid>
    );
}

export default QuestionsCard;
