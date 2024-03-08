interface Prop {
  receivedData: Record<string, any>[];
}

const Synonym = ({ receivedData }: Prop) => {
  const data = receivedData[0];
  const synonym = data?.meanings[0]?.synonyms[0];

  return (
    <div className="flex gap-5">
      {synonym ? (
        <>
          <h4>Synonym</h4>
          <h3 className="text-[#A445ED] ">{synonym}</h3>
        </>
      ) : null}
    </div>
  );
};
export default Synonym;
