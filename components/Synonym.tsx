import { useApp } from '@/contexts/AppContext';

const Synonym = () => {
  const { receivedData, handleGetSynonym } = useApp();
  const data = receivedData[0];
  const synonym = data?.meanings[0]?.synonyms[0];

  return (
    <div className="flex gap-5">
      {synonym && (
        <>
          <h4>Synonym</h4>
          <button
            onClick={() => handleGetSynonym(synonym)}
            className="text-[#A445ED]"
          >
            {synonym}
          </button>
        </>
      )}
    </div>
  );
};
export default Synonym;
