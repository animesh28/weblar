import GlobalStyles from "./globalStyles";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { load } from "google-fonts-loader";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";

const App = () => {
  load({ Poppins: ["400", "500"], Lato: ["500"] });
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
