import Navbar from "../components/Navbar";
import heroImg from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="max-h-screen relative border ">
      <div className="absolute w-full h-full text-white max-h-screen bg-black/45 flex flex-col justify-center">
        <Navbar />
        <div className="ml-14 sm:ml-18 md:ml-48">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl">
            The House Of The
          </h2>
          <h2 className="text-xl font-bold sm:text-2xl md:text-4xl lg:text-6xl">
            Narrative Art
          </h2>
        </div>
        <div></div>
      </div>
      <img
        className="w-full max-h-screen object-cover"
        src={heroImg}
        alt="Modern Home"
      />
    </section>
  );
};

export default Hero;
