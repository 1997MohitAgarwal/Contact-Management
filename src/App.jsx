import './App.css'
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Charts from "./components/Charts"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default function App() {
  return (
    <Router>
       <Navbar/>
      <Routes>
        <Route index element={<Contact/>}/>
        <Route exact path="/Contacts" element={<Contact/>} />
        <Route exact path="/Charts" element={<><Charts/></>} />
      </Routes>
    </Router>
    )
}
