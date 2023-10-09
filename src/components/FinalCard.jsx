import { Box, Button, Card, Typography } from "@mui/material";
import bgImg from "../assets/bg-card.png";
import congratImg from "../assets/title-congratulation.png";
import btnNext from "../assets/btn-next.png";
import winner from "../assets/winner-cup.png";
import splash from "../assets/splash-instructions.png";
import splashSad from "../assets/splash-sad.png";
import { useState } from "react";
import rankingData from "../utils/rankingData";

export default function FinalCard({ score }) {
    const [isNext, setIsNext] = useState(false);
    const user = localStorage.getItem('userData');
    const result1 = score < 4 ? 'wasted' : 'saved';
    const result2 = score < 4 ? 'waste' : 'save';
    const splashImg = score < 4 ? splashSad : splash;

    return (
        <Card
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 100,
                width: '40%',
                height: '50%',
                background: `url(${bgImg}) lightgray 50% / cover no-repeat`,
                borderRadius: '48px',
                textAlign: 'center',
                overflow: 'visible',
                display: 'flex',
            }}
        >
            <img
                src={congratImg}
                width="70%"
                style={{
                    position: 'absolute',
                    top: '-8%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 160
                }}
            />
            {
                !isNext && (
                    <>
                        <Box mt="5%" width="80%" mx="auto" display="flex" flexDirection="column" justifyContent="space-around" alignItems="center" height="-webkit-fill-available">
                            <img src={winner} width="170px" alt="winner" />
                            <Box
                                display="flex"
                                justifyContent="space-around"
                                sx={{
                                    borderRadius: '20px',
                                    background: 'rgba(255, 255, 255, 0.20)',
                                    padding: 2,
                                    width: '90%'
                                }}
                            >
                                <Box>
                                    <Typography variant="h6" fontWeight="bold">
                                        Name:
                                    </Typography>
                                    <Typography variant="h6">
                                        {user}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" fontWeight="bold">
                                        Score:
                                    </Typography>
                                    <Typography variant="h6">
                                        {score}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6" fontWeight="bold">
                                        Type:
                                    </Typography>
                                    <Typography variant="h6">
                                        {
                                            score < 4.5 ? 'Needs practice' : (score < 6 ? 'Almost there' : 'Fantastic')
                                        }
                                    </Typography>
                                </Box>
                            </Box>
                            <Button onClick={() => setIsNext(true)}>
                                <img src={btnNext} />
                            </Button>
                        </Box>
                    </>
                )
            }


            {
                isNext && (
                    <Box
                        display="flex"
                        padding={5}
                        alignItems="center"
                        height="-webkit-fill-available"
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.20)',
                            width: '80%',
                            height: '45%',
                            margin: 'auto',
                            marginTop: '18.5%',
                            borderRadius: '20px'
                        }}
                    >
                        <img src={splashImg} width="180px" />
                        <Box pl={3} display="flex" flexDirection="column" justifyContent="space-around" height="100%">
                            <Box>
                                <Typography variant="h6" fontWeight="bold">
                                    You have {result1}
                                </Typography>
                                <Typography color="#3A70CB" variant="h6" fontWeight="bold">
                                    {rankingData[score]['Resultado']}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="h6" fontWeight="bold">
                                    With your actions you managed to {result2} for the year 2050
                                </Typography>
                                <Typography color="#3A70CB" variant="h6" fontWeight="bold">
                                {rankingData[score]['Percapita']} km³/year
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                )
            }
        </Card>
    )
}