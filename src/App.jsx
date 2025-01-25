import FormPage from "./FirstPageItem/FormPage";
import TowingProcessing from "./SecondPageItem/TowingProcessing";
import ProcessingPage from "./SecondPageItem/ProcessingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartingPage from "./FirstPageItem/StartingPage";
import LoadingConditional from "./SecondPageItem/LoadingConditional";
import Payment from "./SecondPageItem/Payment";
import Admin from "./Login/Admin.jsx";
import SystemAdmin from "./Login/SystemAdmin.jsx";
import AdminDataManage from "./DataManagement/AdminDataManage.jsx";
import { useEffect, useState } from "react";

function App() {
  // const [admin, setAdmin] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:3000");
  //     const data = await res.json();
  //     setAdmin(data.admin);
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      {/* {admin.map((detail) => (
        <h1>
          {detail.name},{detail.email}.{detail.password}
        </h1>
        ))} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/Formpage" element={<FormPage />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Progress" element={<ProcessingPage />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/SystemAdmin" element={<SystemAdmin />} />
          <Route path="/AdminDataManage" element={<AdminDataManage />} />
        </Routes>
      </BrowserRouter>
      {/* <ProcessingPage /> */}
      {/* <LoadingConditional /> */}
    </>
  );
}
export default App;
