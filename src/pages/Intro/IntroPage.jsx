import { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import ReactLogo from '../../components/Intro/ReactLogo';
import Earth from '../../components/Intro/Earth';
import StarsAnimated from '../../components/Intro/StarsAnimated';
import { Box, Container } from '@mui/material';
import InstructionSection from '../../components/Intro/InstructionsSection';
import UserDataSection from '../../components/Intro/UserDataSection';
import VideosSection from '../../components/Intro/VideosSection';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../../index.css'
import WavesLetter from '../../components/Intro/WavesLetter';

export default function IntroPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  const canvasRef = useRef();

  const handleCreated = () => {
    setIsLoaded(true);
  };

  const [arrows, setArrows] = useState([]);
  const arrowDelay = 1000;
  const maxArrows = 3;

  useEffect(() => {
    let timeout;
    if (arrows.length < maxArrows) {
      timeout = setTimeout(() => {
        setArrows([...arrows, arrows.length + 1]);
      }, arrowDelay);
    } else {
      timeout = setTimeout(() => {
        setArrows([]);
      }, arrowDelay);
    }

    return () => clearTimeout(timeout);
  }, [arrows]);

  return (
    <>
      <Canvas
        ref={canvasRef}
        id='canvas'
        style={{ position: 'fixed' }}
        camera={{ position: [20, 3, 5], fov: 25 }}
        onCreated={handleCreated}
      >
        <color attach='background' args={['black']} />
        <pointLight intensity={200} color={0x61dbfb} position={[0, 5, 5]} />
        <spotLight intensity={10} color={0x61dbfb} position={(-20, 50, 10)} />
        <StarsAnimated />
        <Suspense fallback={null}>
          <ReactLogo />
          <Earth />
        </Suspense>
      </Canvas>

      <Loader />

      <Container style={{position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '80%' }}>
        {
          isLoaded && (
            <Box display="flex" alignItems="center" justifyContent="center">
              <WavesLetter />
            </Box>
          )
        }
        <Box className="animated-arrows-container" sx={{ color: 'white', mt: '52%' }}>
          {arrows.map((arrowNumber) => (
            <div key={arrowNumber} className="arrow-container">
                <KeyboardArrowDownIcon fontSize='large' />
            </div>
          ))}
        </Box>
      </Container>

      <Container  sx={{position: 'relative', height: '1000px', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '90%'}}>
        <VideosSection />
      </Container>

      <Container
        sx={{
          position: 'relative',
          height: '1000px',
          width: '200%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <InstructionSection />
      </Container>

      <Container sx={{position: 'relative', height: '1000px', width: '200%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <UserDataSection />
      </Container>
    </>
  )
}
