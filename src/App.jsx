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
import Driver from "./Login/Driver.jsx";
import { useEffect, useState } from "react";
import BookingConfirmation from "./DataManagement/BookingConfirmation.jsx";
import Assignation from "./DataManagement/Assignation.jsx";
import IncomingRequestPage from "./Login/IncomingRequestPage.jsx";

function App() {
  return (
    <>
      {/* {bookingConfirmation.map((item) => (
        <h1>
          {item.detail},{item.image}.{item.time}
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
          <Route path="/Driver" element={<Driver />} />
          <Route path="/AdminDataManage" element={<AdminDataManage />} />
        </Routes>
      </BrowserRouter>
      {/* <BookingConfirmation /> */}
      {/* <Assignation /> */}
      {/* <ProcessingPage /> */}
      {/* <LoadingConditional /> */}
      {/* <IncomingRequestPage /> */}
    </>
  );
}
export default App;
