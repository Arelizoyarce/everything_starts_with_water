import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, TextField, Typography } from '@mui/material';
import winner from '../../assets/splash-winner2.png';
import { changeButtonDisabled } from '../../redux/actions';
import playImg from '../../assets/play_over.png';
import { useNavigate } from 'react-router';
import CustomizedCard from './CustomizedCard';

export default function UserDataSection() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [textfieldDisabled, setTextfieldDisabled] = useState(false);

    const handleClick = () => {
        localStorage.setItem('userData', username);
        setTextfieldDisabled(true);
        dispatch(changeButtonDisabled(true));
        navigate('/world');
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const isSendDisabled = username.length === 0;

    return (
        <Box display="flex" flexDirection="column" width="100%" alignItems="center">
            <CustomizedCard
                sx={{
                    textAlign: 'center',
                    mb: 2,
                }}
            >
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography variant='h4' fontWeight="bold" mb={1}>ENTER YOUR DATA</Typography>
                    <Typography variant='h5'>Are you ready to win?</Typography>
                </Box>
                <img src={winner} width={220}/>
                    <Box mt={3} display="flex" alignItems="center" justifyContent="center">
                        <TextField
                            hiddenLabel
                            placeholder='Username'
                            sx={{
                                borderRadius: '8px',
                                border: '2px solid #0285b2',
                            }}
                            value={username}
                            onChange={handleUsernameChange}
                            disabled={textfieldDisabled}
                        />
                        <Button
                            style={{ minWidth: 'auto', padding: 0, marginLeft: '1%', position: 'absolute', marginLeft: '28%' }}
                            onClick={handleClick} disabled={isSendDisabled || textfieldDisabled}
                        >
                            <img src={playImg} width="65px" style={{ filter: (isSendDisabled || textfieldDisabled) && 'grayscale(90%)' }}/>
                        </Button>
                    </Box>
            </CustomizedCard>
        </Box>
    )
}