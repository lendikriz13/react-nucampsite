import './App.css';
import CampsitesList from './features/campsites/CampsitesList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <><Header /><div className="App">
      <CampsitesList />
      <Footer />
    </div></>
  );
}

export default App;
