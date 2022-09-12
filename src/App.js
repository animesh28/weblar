import GlobalStyles from "./globalStyles";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { load } from "google-fonts-loader";

const App = () => {
  load({ Poppins: ["400", "500"], Lato: ["500"] });
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
