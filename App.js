import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DictionaryPage from "./Final_Exam/Page/DictionaryPage";
import FishInfoPage from "./Final_Exam/Page/FishInfoPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/dictionary" element={<DictionaryPage/>} />
          <Route path="/fishInfo" element={<FishInfoPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
