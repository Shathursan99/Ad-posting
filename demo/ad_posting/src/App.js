import Navbar from "./components/Navbar";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/home";
function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <App />
      break
    case "/home":
      component = <Home/>
      break
    case "/SignUp":
      component = <SignUp />
      break
    case "/SignIn":
      component = <SignIn />
      break
  }
  return (
    <>
      <Navbar />
      <component/>
    </>
  )
}

export default App;
