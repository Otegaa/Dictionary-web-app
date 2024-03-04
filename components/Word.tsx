import Image from 'next/image';

import audioImg from '../public/assets/images/icon-play.svg';
interface Prop {
  receivedData: Record<string, any>[];
}

const Word = ({ receivedData }: Prop) => {
  if (receivedData.length === 0) {
    return <div>No data available</div>;
  }

  const data = receivedData[0];

  const handlePlayAudio = () => {
    const audi0Arr = data?.phonetics;
    const audio = new Audio(audi0Arr[0].audio);
    audio.play();
  };

  console.log(data);
  return (
    <>
      <div>
        <h1>{data?.word}</h1>
        <h3>{data?.phonetic}</h3>
      </div>
      <div>
        <Image src={audioImg} alt="audio" onClick={handlePlayAudio} />
      </div>
    </>
  );
};
export default Word;
