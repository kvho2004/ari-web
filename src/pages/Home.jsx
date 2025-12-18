import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutXR from "../components/AboutXR";
// import Gallery from "../components/Gallery";
// import Mission from "../components/Mission";
// import JoinUs from "../components/JoinUs";
// import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <AboutXR />
    </div>
  );
}

export default Home;
