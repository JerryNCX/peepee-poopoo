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
import BookingConfirmation from "./DataManagement/BookingConfirmation.jsx";

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
  // const [bookingConfirmation, setBookingConfirmation] = useState([]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetch("http://localhost:3000");
  //       const data = await res.json();
  //       setBookingConfirmation(data.bookingConfirmation);
  //     };
  //     fetchData();
  //   }, []);
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
          <Route path="/AdminDataManage" element={<AdminDataManage />} />
        </Routes>
      </BrowserRouter>
      {/* <BookingConfirmation /> */}
      {/* <ProcessingPage /> */}
      {/* <LoadingConditional /> */}
    </>
  );
}
export default App;
