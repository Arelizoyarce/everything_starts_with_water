import { Box, Typography } from '@mui/material';
import splash from '../../../assets/splash-instructions.png';
import keyboard from '../../../assets/keyboard.png';
import CircleIcon from '@mui/icons-material/Circle';
import CustomizedCard from '../CustomizedCard';

export default function FirstInstruction() {
    return (
        <CustomizedCard>
            <Box sx={{ textAlign: 'center', display: 'flex' }}>
                <img src={splash} width='180px' style={{ marginTop: 'auto', marginBottom: 'auto', height: 'fit-content' }} />
                <Box mt={2}>
                    <Box>
                        <Typography variant='h4' fontWeight="bold" mb={1}>INSTRUCTIONS</Typography>
                        <Typography variant='h6'>Before entering this wonderful world</Typography>
                        <Typography variant='h6'>Read the following instructions</Typography>
                    </Box>
                    <img src={keyboard} width='180px' style={{ marginTop: 15 }} />
                </Box>
            </Box>
            <Box ml="5%" mt={1.5}>
                <Box display="flex" alignItems="center" mb={1}>
                    <CircleIcon style={{ color: 'lightblue', marginRight: 12 }} />
                    <Typography variant='h6'>
                        "W": To go forward
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <CircleIcon style={{ color: 'lightblue', marginRight: 12 }} />
                    <Typography variant='h6'>
                        "S": To go back
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <CircleIcon style={{ color: 'lightblue', marginRight: 12 }} />
                    <Typography variant='h6'>
                        "A": To go left
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <CircleIcon style={{ color: 'lightblue', marginRight: 12 }} />
                    <Typography variant='h6'>
                        "D": To go to the right
                    </Typography>
                </Box>
            </Box>
        </CustomizedCard>
    )
}