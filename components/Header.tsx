import Font from './Font';
import Logo from './Logo';
import Theme from './Theme';

// interface Props {
//   selectedFont: string;
//   onHandleChange: React.ChangeEventHandler<HTMLSelectElement>;
// }

const Header = () => {
  return (
    <div className="flex justify-between px-4 py-4">
      <Logo />
      <div className="flex justify-between gap-3 items-center">
        <Font />
        <span className="text-gray-400">|</span>
        <Theme />
      </div>
    </div>
  );
};
export default Header;
