import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Card, FormControlLabel, Radio, RadioGroup } from "@mui/material";

function FinalQuestion({ question, handleOptionChange }) {

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
                <Typography style={{fontSize: '20px'}} variant="subtitle1">
                    {question.question}
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
                {question.options.map((q, i) => {
                    return (
                        <FormControlLabel
                            value={q.score}
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

export default FinalQuestion;
