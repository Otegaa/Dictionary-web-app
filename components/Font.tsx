import { useApp } from '@/contexts/AppContext';

const Font = () => {
  const { selectedFont, handleChangeFont } = useApp();
  return (
    <select
      name="font"
      className={`select select-bordered select-[#808080] select-xs max-w-xs focus:outline-none font-${selectedFont}`}
      value={selectedFont}
      onChange={handleChangeFont}
    >
      <option value="inter">Inter</option>
      <option value="inconsolata"> Inconsolata</option>
      <option value="lora">Lora</option>
    </select>
  );
};
export default Font;
