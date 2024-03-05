interface Prop {
  receivedData: Record<string, any>[];
}

const NounMeaning = ({ receivedData }: Prop) => {
  const data = receivedData[0];
  const noun = data.meanings[0];
  console.log(noun);

  const filteredThreeDefinitions = noun.definitions.slice(0, 3);
  console.log(filteredThreeDefinitions);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <h3>{noun.partOfSpeech}</h3>
        <span className="h-px bg-[#979797] grow"></span>
      </div>
      <div>
        <h4>Meaning</h4>
        <ul className="marker:text-[#A445ED] list-disc list-outside ml-4">
          {filteredThreeDefinitions.map((def: { definition: any }) => {
            return <li key={def.definition}>{def.definition}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default NounMeaning;
