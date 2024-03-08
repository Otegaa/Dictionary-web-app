interface Props {
  selectedFont: string;
  onHandleChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const Font = ({ selectedFont, onHandleChange }: Props) => {
  return (
    <select
      name="font"
      className={`select select-bordered select-[#808080] select-xs max-w-xs focus:outline-none font-${selectedFont}`}
      value={selectedFont}
      onChange={onHandleChange}
    >
      <option value="inter">Inter</option>
      <option value="inconsolata"> Inconsolata</option>
      <option value="lora">Lora</option>
    </select>
  );
};
export default Font;
