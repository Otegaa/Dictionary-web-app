interface Prop {
  receivedData: Record<string, any>[];
}

const NounMeaning = ({ receivedData }: Prop) => {
  const data = receivedData[0];
  const noun = data.meanings[0];

  return <div></div>;
};
export default NounMeaning;
