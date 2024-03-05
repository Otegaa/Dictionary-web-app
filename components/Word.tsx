import Image from 'next/image';

import audioImg from '../public/assets/images/icon-play.svg';
import NounMeaning from './NounMeaning';
interface Prop {
  receivedData: Record<string, any>[];
}

const Word = ({ receivedData }: Prop) => {
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
        console.log('No audio available');
      }
    } else {
      console.log('No Audio unavailable');
    }
  };

  console.log(data);
  return (
    <div className="px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="font-inter font-bold text-2xl">{data?.word}</h1>
          <h3 className="text-[#A445ED]">{data?.phonetic}</h3>
        </div>
        <div>
          <Image
            src={audioImg}
            alt="audio"
            onClick={handlePlayAudio}
            className="h-10 w-10"
          />
        </div>
      </div>
      <NounMeaning receivedData={receivedData} />
    </div>
  );
};
export default Word;
