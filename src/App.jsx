import FormPage from "./FirstPageItem/FormPage";
import TowingProcessing from "./SecondPageItem/TowingProcessing";
import ProcessingPage from "./SecondPageItem/ProcessingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartingPage from "./FirstPageItem/StartingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/Formpage" element={<FormPage />} />
          <Route path="/LoadingPage" element={<TowingProcessing />} />
        </Routes>
      </BrowserRouter>
      {/* <ProcessingPage /> */}

    </>
  );
}
export default App;
