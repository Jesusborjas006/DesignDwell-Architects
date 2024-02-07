const FeaturedWorksLayout = () => {
  return (
    <section className="px-6 mt-24 w-[80%] md:mx-auto">
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-[#D7926B] w-14 h-[2px] mr-4"></div>
            <h4 className="text-[#D7926B]">PROJECTS</h4>
          </div>
          <h2 className="text-4xl font-semibold">Featured Works</h2>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <p>PREV</p>
          <div className="bg-black w-20 h-[2px] mr-4"></div>
          <div className="bg-[#D7926B] w-20 h-[2px] mr-4"></div>
          <p className="text-[#D7926B]">NEXT</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorksLayout;
