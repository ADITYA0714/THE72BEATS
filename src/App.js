import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Organization from "./Organization";
import Patient from "./Patient";
import Doctor from "./Doctor";
import Medicines from "./Medicines";
import Consult from "./Consult";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Nav />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/organization" element={<Organization />} />
                    <Route path="/patient" element={<Patient />} />
                    <Route path="/doctor" element={<Doctor />} />
                    <Route path="/medicines" element={<Medicines />} />
                    <Route path="/consult" element={<Consult />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
