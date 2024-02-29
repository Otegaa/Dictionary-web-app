import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Image
        src="../../assets/images/logo.svg"
        width={34}
        height={38}
        alt="logo"
      />
    </div>
  );
};
export default Logo;
