//import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Sucess from './pages/sucess';
//import Adpost from './pages/Adpost';
import navSoft from'./layout/NavbarForsoft';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewUser from './pages/ViewUser';
import ViewAds from './pages/ViewAds';
import NavbarForsoft from './layout/NavbarForsoft';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <navSoft/>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/ad-post' element={<Adpost />} />
        <Route path='/sucess' element={<Sucess />} />
        <Route path='/view-user' element={<ViewUser />} />
        <Route path='/view-ads' element={<ViewAds />} />   */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
