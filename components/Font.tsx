'use client';
import { SetStateAction, useState } from 'react';

const Font = () => {
  const [selectedFont, setSelectedFont] = useState('inter');

  const handleChangeFont = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedFont(e.target.value);
  };
  return (
    <select
      name="font"
      className={`select select-bordered select-[#808080] select-xs max-w-xs focus:outline-none font-${selectedFont}`}
      value={selectedFont}
      onChange={handleChangeFont}
    >
      <option disabled selected>
        Select font
      </option>
      <option value="inter">Inter</option>
      <option value="inconsolata"> Inconsolata</option>
      <option value="lora">Lora</option>
    </select>
  );
};
export default Font;
