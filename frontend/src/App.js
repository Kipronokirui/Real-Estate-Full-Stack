import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NotFound from "./components/NotFound";
import PropertiesPage from "./pages/PropertiesPage";


function App() {
  return (
    <>
			<Router>
        <Header />
        <main className="py-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
							path="/properties"
							element={<PropertiesPage />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer theme="dark" />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
