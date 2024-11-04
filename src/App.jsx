import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Navbar from './components/Header/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurTeam from './pages/OurTeam';
import SalientFeatures from './pages/SalientFeatures';
// import ServicesPage from './pages/ServicesPage';
import StudyVisaJapan from './pages/StudyVisaJapan';
import TITPProgram from './pages/TITPProgram';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer/Footer';
import JapanLanguageCourse from './pages/JapanLanguageCourse';
import RegisterPage from './pages/RegisterPage';
import HeaderNav from './components/Header/HaederNav';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <HeaderNav/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team"  element={<OurTeam />}/>
        <Route path="/salient" element={<SalientFeatures />} />
        {/* <Route path="/services" element={<ServicesPage />} /> */}
        <Route path="/japaneseinjapan" element={<StudyVisaJapan />} />
        <Route path="/titp" element={<TITPProgram />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/JapanesLangCourse" element={<JapanLanguageCourse/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;