import FormPage from "./FirstPageItem/FormPage";
import TowingProcessing from "./SecondPageItem/TowingProcessing";
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
          {/* <Route path="/ProcessingPage" element={<ProcessingPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
