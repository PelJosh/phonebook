import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import AddContactPage from "./pages/AddContactPage";
import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer hideProgressBar />
        <div className="w-full flex flex-col md:flex-row">
          <Sidebar />

          <div className="flex flex-col py-16 px-8 md:w-[calc(100%-300px)] h-[100vh] overflow-y-scroll">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/add-contact" element={<AddContactPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
