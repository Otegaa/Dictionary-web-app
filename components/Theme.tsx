import Image from 'next/image';

import toggleIconLight from '../public/assets/images/toggleIconLight.png';
import moonIcon from '../public/assets/images/icon-moon.svg';

const Theme = () => {
  return (
    <div className="flex justify-between items-center gap-2">
      <Image
        src={toggleIconLight}
        alt="toggleIconLight"
        priority
        className="h-7 w-7"
      />
      <Image src={moonIcon} alt="moonIcon" priority className="h-4 w-4" />
    </div>
  );
};
export default Theme;
