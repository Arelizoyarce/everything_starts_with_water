import { Box, Typography } from '@mui/material';
import mouse from '../../../assets/mouse.png';
import totem from '../../../assets/totem.png';
import line from '../../../assets/line.png';
import splashLeft from '../../../assets/splash-left.png';
import splashRight from '../../../assets/splash-right.png';
import step from '../../../assets/step.png';
import CustomizedCard from '../CustomizedCard';

export default function SecondInstruction() {
    return (
        <CustomizedCard>
            {/* <img src={splash} width='180px' style={{ marginTop: 'auto', marginBottom: 'auto', height: 'fit-content' }} /> */}
            <Box display="flex" alignItems="center" p={2} textAlign="center">
                <Box alignItems="start" display="flex" flexDirection="column">
                    <Typography variant='h6' textAlign="start">Totem</Typography>
                    <img src={line} width='100px' style={{ marginTop: 5 }} />
                    <Box display="flex" justifyContent="start">
                        <img src={totem} width='90px' style={{ marginTop: 15 }} />
                        <img src={mouse} width='90px' height="90px" style={{ marginTop: 15 }} />
                    </Box>
                    <Typography variant='h6' textAlign="start">Left click on the totems that appear throughout the place to interact</Typography>
                </Box>
                <img src={splashLeft} width='180px' style={{ marginTop: 15 }} />
            </Box>
            <Box mt={2} display="flex" alignItems="center" p={2} textAlign="center">
                <img src={splashRight} width='180px' style={{ marginTop: 15 }} />
                <Box alignItems="end" display="flex" flexDirection="column">
                    <Typography variant='h6' textAlign="end">Stop</Typography>
                    <img src={line} width='100px' style={{ marginTop: 5 }} />
                    <img src={step} width='70px' style={{ marginTop: 15 }} />
                    <Typography variant='h6' textAlign="end">Guide yourself to the stops to be able to reach all the locations</Typography>
                </Box>
            </Box>
        </CustomizedCard>
    )
}