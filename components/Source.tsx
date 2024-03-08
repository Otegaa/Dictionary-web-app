import Image from 'next/image';

import newWindowImg from '../public/assets/images/icon-new-window.svg';

interface Prop {
  receivedData: Record<string, any>[];
}

const Source = ({ receivedData }: Prop) => {
  const data = receivedData[0];
  const links = data.sourceUrls;
  const srcLink = links[0];
  console.log(srcLink);

  return (
    <div>
      <h5 className="underline">Source</h5>
      <div className="flex items-center gap-2">
        <a
          href={srcLink}
          target="_blank"
          className="hover:underline hover:text-[#A445ED] cursor-pointer"
        >
          {srcLink}
        </a>
        <Image src={newWindowImg} alt="new window image" className="h-4 w-4" />
      </div>
    </div>
  );
};
export default Source;
