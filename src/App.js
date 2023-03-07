import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home, Contact } from './containers';
import NotMatch from './containers/notFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
