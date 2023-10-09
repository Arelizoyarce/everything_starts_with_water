import styled from '@emotion/styled';
import { Card } from '@mui/material';
import bgImg from '../../assets/bg-card.png';

const CustomizedCard = styled(Card)(() => ({
    height: '510px',
    width: '50%',
    padding: 32,
    // background: `url(${bgImg}) lightgray 50% / cover no-repeat`,
    backgroundColor: 'rgba(255, 255, 255, 0.96)',
    borderRadius: '15px',
}));

export default CustomizedCard;
