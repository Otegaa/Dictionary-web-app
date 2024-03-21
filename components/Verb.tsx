import { useApp } from '@/contexts/AppContext';

interface Prop {
  receivedData: Record<string, any>[];
}

const Verb = () => {
  const { receivedData } = useApp();

  const data = receivedData[0];
  const verb = data?.meanings[1];
  const filteredWord = verb?.definitions[0];

  return (
    <div className="flex flex-col gap-5">
      {verb ? (
        <>
          <div className="flex items-center gap-5">
            <h3 className="font-bold">{verb.partOfSpeech}</h3>
            <span className="h-px bg-[#979797] grow"></span>
          </div>
          <div className="flex flex-col gap-2 border-b-2 pb-8">
            <h4>Meaning</h4>
            <ul className="marker:text-[#A445ED] list-disc list-outside ml-4">
              <li>{filteredWord.definition}</li>
            </ul>
            <p className="ml-4">
              {filteredWord.example ? `"${filteredWord.example}"` : null}
            </p>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};
export default Verb;
