import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserHomePage from "./Final_Exam/Page/UserHomePage";
import DictionaryPage from "./Final_Exam/Page/DictionaryPage";
import FishInfoPage from "./Final_Exam/Page/FishInfoPage";
import AboutPage from "./Final_Exam/Page/AboutPage";
import MatchPage from "./Final_Exam/Page/MatchPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserHomePage/>}/>
                <Route path="/dictionary" element={<DictionaryPage/>}/>
                <Route path="/fishInfo" element={<FishInfoPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/match" element={<MatchPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
