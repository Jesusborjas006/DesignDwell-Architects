import Navbar from "../components/Navbar";
import heroImg from "../assets/hero-bg.jpg";
import HeroHeading from "../components/HeroHeading";
import HeroFooter from "../components/HeroFooter";

const Hero = () => {
  return (
    <section className="max-h-screen relative min-h-[550px]">
      <div className="absolute w-full h-full text-white max-h-screen bg-black/45 flex flex-col justify-center ">
        <Navbar />
        <HeroHeading />
        <HeroFooter />
      </div>
      <img
        className="w-full max-h-screen object-cover min-h-[550px]"
        src={heroImg}
        alt="Modern Home"
      />
    </section>
  );
};

export default Hero;
