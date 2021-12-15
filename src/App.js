import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Add_contact from "./components/Add_contact";
import Edit_contact from "./components/Edit_contact";

import Contacts from "./Contacts";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/add_contact" element={<Add_contact />} />
          <Route path="/edit_contact/:id" element={<Edit_contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
