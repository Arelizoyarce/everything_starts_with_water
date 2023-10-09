import { useEffect, useRef, useState } from 'react';
import { Button, Card, Typography } from '@mui/material';
import introVideo from '../../assets/videos/video_introductorio.mp4';
import condensationVideo from '../../assets/videos/video_condensation.mp4';
import evaporationVideo from '../../assets/videos/video_evaporation.mp4';
import filtrationVideo from '../../assets/videos/video_filtration.mp4';
import precipitationVideo from '../../assets/videos/video_precipitation.mp4';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Autoplay } from 'swiper';
import playImg from '../../assets/play_over.png'
import pauseImg from '../../assets/pausa_over.png'

SwiperCore.use([EffectCoverflow, Autoplay]);

const videos = [
  {
    id: 1,
    videoSrc: introVideo,
    videoTitle: 'LEARN ABOUT THE WATER CYCLE',
  },
  {
    id: 2,
    videoSrc: evaporationVideo,
    videoTitle: 'EVAPORATION',
  },
  {
    id: 3,
    videoSrc: condensationVideo,
    videoTitle: 'CONDENSATION',
  },
  {
    id: 4,
    videoSrc: precipitationVideo,
    videoTitle: 'PRECIPITATION',
  },
  {
    id: 5,
    videoSrc: filtrationVideo,
    videoTitle: 'FILTRATION',
  },
];

function VideosSection() {
  const [swiper, setSwiper] = useState(null);
  const [playing, setPlaying] = useState(Array(videos.length).fill(false)); // ahora 'playing' es un array de booleanos
  const videoRefs = useRef([]);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, []);

  const togglePlayPause = (index) => {
    const video = videoRefs.current[index];
  
    if (currentPlayingIndex !== null && currentPlayingIndex !== index) {
      const currentVideo = videoRefs.current[currentPlayingIndex];
      currentVideo.pause();
      setPlaying(prev => { 
        const copy = [...prev]; 
        copy[currentPlayingIndex] = false; 
        return copy; 
      });
    }
  
    if (video.paused || video.ended) {
      video.play();
      setPlaying(prev => { 
        const copy = [...prev]; 
        copy[index] = true; 
        return copy; 
      });
      setCurrentPlayingIndex(index);
    } else {
      video.pause();
      setPlaying(prev => { 
        const copy = [...prev]; 
        copy[index] = false; 
        return copy; 
      });
      setCurrentPlayingIndex(null);
    }
  };

  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 40,
    autoplay: false,
    speed: 2000,
    loop: true,
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 3,
      slideShadows: true,
    },
    autoHeight: true,
    resizeObserver: true,
    onSwiper: (swiper) => setSwiper(swiper),
  };

  return (
    <Swiper {...params}>
      {videos.map((video, index) => (
        <SwiperSlide key={video.id}>
          <Card
            sx={{
              width: '85%',
              maxWidth: '100%',
              height: 'auto',
              margin: 'auto',
              backgroundColor: 'transparent',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <Typography variant='h3' color="lightblue" fontWeight="bold">
              {index === 0 ? video.videoTitle : `${index}. ${video.videoTitle}`}
            </Typography>
            <video
              loop 
              ref={el => videoRefs.current[index] = el}
              className="video-slide" 
              style={{ width: '100%', height: 'auto' }}
            >
              <source src={video.videoSrc} type="video/mp4" />
                Tu navegador no admite la reproducción de video.
            </video>
            {!playing[index] && (
              <Button 
                color="secondary"
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                onClick={() => togglePlayPause(index)}
              >
                <img src={playImg} width="100px"/>
              </Button>
            )}
              {playing[index] && (
            <Button 
              color="secondary"
              style={{ position: 'absolute', bottom: '10px', left: '10px' }}
              onClick={() => togglePlayPause(index)}
            >
              <img src={pauseImg} width="100px"/>
            </Button>
          )}
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VideosSection;