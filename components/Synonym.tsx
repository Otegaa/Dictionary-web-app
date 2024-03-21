import Link from 'next/link';

interface Prop {
  receivedData: Record<string, any>[];
}

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const Synonym = ({ receivedData }: Prop) => {
  const data = receivedData[0];
  const synonym = data?.meanings[0]?.synonyms[0];

  return (
    <div className="flex gap-5">
      {synonym ? (
        <>
          <h4>Synonym</h4>
          <Link href={`${synonym}`} className="text-[#A445ED]">
            {synonym}
          </Link>
        </>
      ) : null}
    </div>
  );
};
export default Synonym;
