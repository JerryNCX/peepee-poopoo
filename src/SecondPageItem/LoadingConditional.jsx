import ProcessingPage from "./ProcessingPage";
import TowingProcessing from "./TowingProcessing";

function Item({ Loading }) {
  return <li>{Loading ? <ProcessingPage /> : <TowingProcessing />}</li>;
}

export default function LoadingCondition() {
  return (
    <section>
      <ul>
        <Item Loading={true} />
        <Item Loading={false} />
      </ul>
    </section>
  );
}
