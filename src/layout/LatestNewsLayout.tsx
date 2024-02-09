import img from "../assets/hero-bg.jpg";

const LatestNewsLayout = () => {
  return (
    <section className="mt-24 py-20 px-6 bg-[#D7926B] bg-opacity-20">
      <div className="flex items-end justify-between max-w-[1200px] mx-auto">
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-[#D7926B] w-14 h-[2px] mr-4"></div>
            <h4 className="text-[#D7926B]">BLOG</h4>
          </div>
          <h2 className="text-4xl font-semibold">Latest News</h2>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <div className="bg-black w-20 h-[2px] mr-4"></div>
          <p className="">VIEW ALL</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-x-5 gap-y-10 mt-10 max-w-[1200px] mx-auto">
        <div>
          <img className="mb-4" src={img} alt="background image" />
          <p className="text-[#D7926B] text-sm">
            APRIL 06, 2024 <span className="mr-2">FLOYD MILES</span>
          </p>
          <p className="font-semibold text-lg">
            Nordic style, interior style for simple life
          </p>
          <div className="flex items-center mt-4">
            <div className="bg-black w-10 h-[2px] mr-2"></div>
            <p>READ MORE</p>
          </div>
        </div>
        <div>
          <img className="mb-4" src={img} alt="background image" />
          <p className="text-[#D7926B] text-sm">
            APRIL 06, 2024 <span className="mr-2">FLOYD MILES</span>
          </p>
          <p className="font-semibold text-lg">
            Nordic style, interior style for simple life
          </p>
          <div className="flex items-center mt-4">
            <div className="bg-black w-10 h-[2px] mr-2"></div>
            <p>READ MORE</p>
          </div>
        </div>
        <div>
          <img className="mb-4" src={img} alt="background image" />
          <p className="text-[#D7926B] text-sm">
            APRIL 06, 2024 <span className="mr-2">FLOYD MILES</span>
          </p>
          <p className="font-semibold text-lg">
            Nordic style, interior style for simple life
          </p>
          <div className="flex items-center mt-4">
            <div className="bg-black w-10 h-[2px] mr-2"></div>
            <p>READ MORE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsLayout;
