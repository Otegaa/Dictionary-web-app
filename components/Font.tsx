const Font = () => {
  return (
    <select
      name="font"
      className="select select-bordered select-[#808080] select-xs max-w-xs focus:outline-none"
    >
      <option disabled selected>
        Select font
      </option>
      <option value="serif">Serif</option>
      <option value="sans-serif"> Sans Serif</option>
      <option value="monospace">Monospace</option>
    </select>
  );
};
export default Font;
