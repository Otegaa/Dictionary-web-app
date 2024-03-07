interface Prop {
  receivedData: Record<string, any>[];
}

const Verb = ({ receivedData }: Prop) => {
  const data = receivedData[0];
  const verb = data.meanings[1];
  const filteredOneDefinition = verb.definitions[0];
  console.log(filteredOneDefinition);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <h3>{verb.partOfSpeech}</h3>
        <span className="h-px bg-[#979797] grow"></span>
      </div>
      <div className="flex flex-col gap-2 border-b-2 pb-8">
        <h4>Meaning</h4>
        <ul className="marker:text-[#A445ED] list-disc list-outside ml-4">
          <li>{filteredOneDefinition.definition}</li>
        </ul>
        <p className="ml-4">"{filteredOneDefinition.example}"</p>
      </div>
    </div>
  );
};
export default Verb;
