import './App.css';
import ComparisonSection from './components/ComparisonSection'
import StatisticsSection from './components/StatisticsSection';
import NFTSection from './components/NFTSection';
import HeroSection from './components/HeroSection';
import Lifestyle from './components/Lifestyle';
import FeaturesSection from './components/FeaturesSection';
import Navbar from './components/Navbar';
import Rocket from './components/Rocket';
import IndustryCarousel from './components/BackedBy';
import LaughingRobo from './components/LaughingRobo';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Lifestyle />
      <Rocket />
      <StatisticsSection />
      <FeaturesSection />
      <IndustryCarousel />
      <ComparisonSection />
      <LaughingRobo />
      {/* <NFTSection /> */}
      <Footer/>
    </div>
  );
}

export default App;