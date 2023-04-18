import About from './components/About/About';
import Hero from './components/Hero/Hero'
import Mission from './components/Mission/Mission';
import Speech from './components/Speech/Speech';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Values from './components/Values/Values';
import UpcomingEvent from './components/UpcomingEvent/UpcomingEvent';
function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Mission />
      <Speech />
      <Values />
      <UpcomingEvent />
      <Footer />
    </div>
  );
}

export default App;
