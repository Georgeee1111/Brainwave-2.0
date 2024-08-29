import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/homeComponents/Benefits";
import Collaboration from "../components/homeComponents/Collaboration";
import Footer from "../components/generalComponents/Footer";
import Hero from "../components/homeComponents/Hero";
import Pricing from "../components/homeComponents/Pricing";
import Roadmap from "../components/homeComponents/Roadmap";
import Services from "../components/homeComponents/Services";
import Header from "../components/generalComponents/Header";
import { HomenavigationItems } from "../assets/header/HeaderComponent";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header navigation={HomenavigationItems} />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
