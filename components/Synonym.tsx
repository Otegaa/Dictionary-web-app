import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Prop {
  receivedData: Record<string, any>[];
}

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const Synonym = ({ receivedData }: Prop) => {
  const [synonymData, setSynonymData] = useState(null);

  const data = receivedData[0];
  const synonym = data?.meanings[0]?.synonyms[0];

  useEffect(() => {
    const fetchSynonymData = async () => {
      try {
        const res = await fetch(`${url}${synonym}`);
        if (!res.ok) {
          throw new Error('Failed to fetch synonym data');
        }
        const data = await res.json();
        setSynonymData(data);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    if (synonym) {
      fetchSynonymData();
    }
  }, [synonym]);

  return (
    <div className="flex gap-5">
      {synonymData ? (
        <Link href={`/synonyms/${synonym}`}>
          <a className="text-[#A445ED]">{synonym}</a>
        </Link>
      ) : null}
    </div>
  );
};
export default Synonym;
