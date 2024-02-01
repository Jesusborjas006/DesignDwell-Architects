import Navbar from "../components/Navbar";
import heroImg from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <div>
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
          <div className="flex px-6 text-sm gap-12 md:gap-16 lg:gap-20 absolute bottom-10">
            <div className="sm:border-b-2 pb-2">
              <p className="border-b-2  sm:border-none">01</p>
              <div className="hidden sm:block">
                <p>The House of The</p>
                <p>Narrative Art</p>
              </div>
            </div>
            <div>
              <p>02</p>
              <div className="hidden sm:block">
                <p>The House of The</p>
                <p>Narrative Art</p>
              </div>
            </div>
            <div>
              <p>03</p>
              <div className="hidden sm:block">
                <p>The House of The</p>
                <p>Narrative Art</p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-full max-h-screen object-cover"
          src={heroImg}
          alt="Modern Home"
        />
      </section>
    </div>
  );
};

export default Hero;
