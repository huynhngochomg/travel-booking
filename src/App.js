import './App.css';
import Navbar from './Components/Navbar/Navbar.js'
import Home from './Components/Home/Home.js'
import Middle from './Components/Middle/Middle.js'
import Destinations from './Components/Destinations/Destinations.js'
import Portfolio from './Components/Portfolio/Portfolio.js'
import Questions from './Components/Questions/Questions.js'
import Review from './Components/Review/Review.js'
import Subscribe from './Components/Subscribe/Subscribe.js'
import Footer from './Components/Footer/Footer.js'
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Middle />
      <Destinations />
      <Portfolio />
      <Review />
      <Questions />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
