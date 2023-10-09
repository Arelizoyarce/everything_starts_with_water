import { Button } from '@mui/material';
import { useState } from 'react';
import FirstInstruction from './Instructions/FirstInstruction';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SecondInstruction from './Instructions/SecondInstruction';
import ThirdInstruction from './Instructions/ThirdInstruction';

// import required modules

export default function InstructionSection() {
  const instructions = [
    <FirstInstruction />,
    <SecondInstruction />,
    <ThirdInstruction />
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % instructions.length;
    setCurrentIndex(nextIndex);
  };

  const goToPrevSlide = () => {
    const prevIndex = (currentIndex - 1 + instructions.length) % instructions.length;
    setCurrentIndex(prevIndex);
  };

    return (
      <div className="instruction-container" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button className="nav-button" sx={{ backgroundColor: 'none', color: 'lightblue' }} onClick={goToPrevSlide}>
        <ArrowBackIosNewIcon fontSize='large' />
      </Button>
      {
        instructions[currentIndex]
      }
      <Button className="nav-button" sx={{ backgroundColor: 'none', color: 'lightblue' }} onClick={goToNextSlide}>
        <ArrowForwardIosIcon fontSize='large' />
      </Button>
    </div>
    )
}