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
import PickDropLocation from "./SecondPageItem/PickDropLocation";
import Feedback from "./SecondPageItem/Feedback";
import PickupConfirmationPage from "./Login/src/Driver/PickupConfirmationPage.jsx";
import SystemAdminDataManage from "./SystemAdministration/SystemAdminDataManage.jsx";
import React from "react";
import SidebarLayout from "./pages/SidebarLayout";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./SystemAdministration/SystemAdminDataManage.jsx";
import Calculation from "./pages/Calculation";
import Data from "./pages/Data";
import Notification from "./pages/Notification";
import Invoice from "./pages/Invoice";
import Users from "./pages/Users";
import Drivers from "./pages/Drivers";
import NavigationPage from "./Login/src/Driver/NavigationPage.jsx";


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
          <Route path="/Driver" element={<Driver />} />
          <Route path="/AdminDataManage" element={<AdminDataManage />} />
          <Route path="/PickDropLocation" element={<PickDropLocation />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/IncomingRequestPage" element={<IncomingRequestPage />} />
          <Route path="/PickupConfirmationPage" element={<PickupConfirmationPage />} />
          <Route path="/SystemAdminDataManage" element={<SystemAdminDataManage />} />
             <Route path ="/NavigationPage" element={<NavigationPage/>} />
          <Route path="/Dashboard" element={<SystemAdminDataManage />} />
          <Route element={<SidebarLayout />}>
            <Route path="/calculation" element={<Calculation />} />
            <Route path="/data" element={<Data />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path ="/users" element={<Users />} /> 
            <Route path ="/drivers" element={<Drivers />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;