import Image from 'next/image';

import audioImg from '../public/assets/images/icon-play.svg';
import audioHoverImg from '../public/assets/images/icon-audio-hover.svg';
import NounMeaning from './NounMeaning';
import Loading from './Loading';

import toast from 'react-hot-toast';
import Verb from './Verb';
import Source from './Source';
import { useState } from 'react';
import { useApp } from '@/contexts/AppContext';

const Word = () => {
  const { receivedData, isLoading } = useApp();
  const [isHovered, setIsHovered] = useState(false);

  if (receivedData.length === 0) {
    return <div>Start searching for a word...</div>;
  }

  const data = receivedData[0];

  const handlePlayAudio = () => {
    if (data && data.phonetics) {
      const phoneticsWithAudio = data.phonetics.filter(
        (item: { audio: any }) => item.audio
      );

      if (phoneticsWithAudio.length > 0) {
        const audioUrl = phoneticsWithAudio[0].audio;

        const audio = new Audio(audioUrl);
        audio.play();
      } else {
        toast.error('No audio available');
      }
    } else {
      toast.error('No audio available');
    }
  };

  const handleMouseEnter: React.MouseEventHandler<HTMLImageElement> = () => {
    setIsHovered(true);
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLImageElement> = () => {
    setIsHovered(false);
  };

  return (
    <div className="px-4 py-4">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">{data?.word}</h1>
              <h3 className="text-[#A445ED]">{data?.phonetic}</h3>
            </div>
            <div>
              {isHovered ? (
                <Image
                  src={audioHoverImg}
                  alt="audio hovered image"
                  onClick={handlePlayAudio}
                  className="h-10 w-10"
                  onMouseLeave={handleMouseLeave}
                />
              ) : (
                <Image
                  src={audioImg}
                  alt="audio default image"
                  className="h-10 w-10"
                  onMouseEnter={handleMouseEnter}
                />
              )}
            </div>
          </div>
          <NounMeaning />
          <Verb />
          <Source />
        </>
      )}
    </div>
  );
};
export default Word;
