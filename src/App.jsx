import FormPage from "./FirstPageItem/FormPage";
import TowingProcessing from "./SecondPageItem/TowingProcessing";
import ProcessingPage from "./SecondPageItem/ProcessingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartingPage from "./FirstPageItem/StartingPage";
import LoadingConditional from "./SecondPageItem/LoadingConditional";
import Payment from "./SecondPageItem/Payment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/Formpage" element={<FormPage />} />
          <Route path="/Payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
      {/* <ProcessingPage /> */}
        {/* <LoadingConditional /> */}
    </>
  );
}
export default App;
