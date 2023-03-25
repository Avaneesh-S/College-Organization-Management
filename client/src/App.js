import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CreateAccount from "./Pages/CreateAccount";
import Attendance from "./Pages/Attendance";
import Profile from "./profile/profile"
function App() {
  return (
    <Router>
      <div className='h-screen w-full bg-slate-100'>
        <Routes>
          <Route exact path="/" element={<SignUp/>}></Route>
          <Route path="/createaccount" element={<CreateAccount/>}></Route>
          <Route path="/attendance" element={<Attendance/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          
        </Routes>
      </div>
    </Router>

  );
}

export default App;
