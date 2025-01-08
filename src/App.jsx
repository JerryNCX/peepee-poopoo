import Title from "./FirstPageItem/Title";
import TowingProcessing from "./SecondPageItem/TowingProcessing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/ProcessingPage" element={<TowingProcessing />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
