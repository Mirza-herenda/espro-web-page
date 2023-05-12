import "./App.css";
import BestSellers from "./components/BestSellers";
import FirstPage from "./components/FirstPage";
import Header from "./components/Header";
import ProductPart from "./components/ProductPart";
import CoffeePart from "./components/CoffeePart";
import ExpriencePart from "./components/ExpriencePart";
import PressPart from "./components/PressPart";
import MoviePart from "./components/MoviePart";
import BrewGuides from "./components/BrewGuides";
import BestMoments from "./components/BestMoments";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <FirstPage />
      <BestSellers />
      <CoffeePart />
      <ProductPart />
      <ExpriencePart />
      <PressPart />
      <MoviePart />
      <BrewGuides />
      <BestMoments />
      <Footer />
    </>
  );
}

export default App;
