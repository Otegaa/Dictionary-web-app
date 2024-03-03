import Image from 'next/image';
import logoImg from '../public/assets/images/logo.svg';

const Logo = () => {
  return (
    <div>
      <Image src={logoImg} alt="logo" priority className="h-8 w-8" />
    </div>
  );
};
export default Logo;
