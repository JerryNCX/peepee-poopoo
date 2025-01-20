import FormPage from "./FirstPageItem/FormPage";
import TowingProcessing from "./SecondPageItem/TowingProcessing";
import ProcessingPage from "./SecondPageItem/ProcessingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartingPage from "./FirstPageItem/StartingPage";
import LoadingConditional from "./SecondPageItem/LoadingConditional";
import Payment from "./SecondPageItem/Payment";
import Admin from "./Login/Admin.jsx"
import SystemAdmin from "./Login/SystemAdmin.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/Formpage" element={<FormPage />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Progress" element={<ProcessingPage />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/SystemAdmin" element={<SystemAdmin />} />
        </Routes>
      </BrowserRouter>
      {/* <ProcessingPage /> */}
        {/* <LoadingConditional /> */}
    </>
  );
}
export default App;
