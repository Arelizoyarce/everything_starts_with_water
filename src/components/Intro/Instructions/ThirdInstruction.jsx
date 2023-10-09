import { Box, Typography } from '@mui/material';
import splashHappy from '../../../assets/splash-happy.png';
import question from '../../../assets/interrogacion.png';
import line from '../../../assets/line.png';
import CustomizedCard from '../CustomizedCard';

export default function ThirdInstruction() {
    return (
        <CustomizedCard sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', textAlign: 'center', alignItems: 'center' }}>
            {/* <img src={splash} width='180px' style={{ marginTop: 'auto', marginBottom: 'auto', height: 'fit-content' }} /> */}
            <Box display="flex" flexDirection="column" p={2}>
                <Box alignItems="start" display="flex" flexDirection="column">
                    <Typography variant='h6' textAlign="start">Questions</Typography>
                    <img src={line} width='100px' style={{ marginTop: 5 }} />
                </Box>
                <Box display="flex">
                    <img src={question} width='180px' height="130px" style={{ marginTop: 15 }} />
                    <Typography variant='h6' textAlign="center" padding={5}>On your tour you will find questions and answers that will help you learn</Typography>
                </Box>
                <Box display="flex">
                    <img src={splashHappy} width='130px' style={{ marginTop: 15 }} />
                    <Typography variant='h6' textAlign="center" padding={5}>At the end of the tour you will be able to know your score and the amount of water you have saved</Typography>
                </Box>
            </Box>
            <Typography color="#009FE3" variant='h5' fontWeight="bold">
                Let's start!
            </Typography>
        </CustomizedCard>
    )
}