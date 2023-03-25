import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import CreateAccount from "./Pages/CreateAccount";
import Attendance from "./Pages/Attendance";
function App() {
  return (
    <Router>
      <div className='h-screen w-full bg-slate-100'>
        <Routes>
          <Route exact path="/" element={<SignUp/>}></Route>
          <Route path="/attendance" element={<Attendance/>}></Route>D
        </Routes>
      </div>
    </Router>

  );
}

export default App;
