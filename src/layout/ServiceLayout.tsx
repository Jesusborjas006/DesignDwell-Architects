const ServiceLayout = () => {
  return (
    <section className="px-6 mt-24">
      <div className="flex flex-col sm:items-center">
        <div className="flex sm:flex-col items-center mb-4">
          <div className="bg-[#D7926B] w-14 sm:w-24 h-[2px] mr-4 sm:mr-0 sm:mb-4"></div>
          <h4 className="text-[#D7926B]">WHAT CAN WE OFFER</h4>
        </div>
        <h2 className="text-4xl font-semibold">Our Services</h2>

        <div className="grid gap-y-6 sm:grid-cols-2 xl:grid-cols-4 mt-12 gap-x-8">
          <div className="group border border-b-4 border-b-[#D7926B] w-full px-6 py-8 hover:bg-[#18130C] hover:text-white">
            <h4 className="font-bold text-lg mb-4">Architecture & Interior</h4>
            <p className="text-sm mb-6 text-[#615E5E] group-hover:text-white">
              Aenean commodo nec ligula eget cum sociis dolor.
            </p>
            <div className="flex items-center">
              <div className="bg-black w-10 h-[2px] mr-2 group-hover:bg-white"></div>
              <p>READ MORE</p>
            </div>
          </div>
          <div className="group border border-b-4 border-b-[#D7926B] w-full px-6 py-8 hover:bg-[#18130C] hover:text-white">
            <h4 className="font-bold text-lg mb-4">Project Planning</h4>
            <p className="text-sm mb-6 text-[#615E5E] group-hover:text-white">
              Aenean commodo nec ligula eget cum sociis dolor.
            </p>
            <div className="flex items-center">
              <div className="bg-black w-10 h-[2px] mr-2 group-hover:bg-white"></div>
              <p>READ MORE</p>
            </div>
          </div>
          <div className="group border border-b-4 border-b-[#D7926B] w-full px-6 py-8 hover:bg-[#18130C] hover:text-white">
            <h4 className="font-bold text-lg mb-4">Product Design</h4>
            <p className="text-sm mb-6 text-[#615E5E] group-hover:text-white">
              Aenean commodo nec ligula eget cum sociis dolor.
            </p>
            <div className="flex items-center">
              <div className="bg-black w-10 h-[2px] mr-2 group-hover:bg-white"></div>
              <p>READ MORE</p>
            </div>
          </div>
          <div className="group border border-b-4 border-b-[#D7926B] w-full px-6 py-8 hover:bg-[#18130C] hover:text-white">
            <h4 className="font-bold text-lg mb-4">Custom Solutions</h4>
            <p className="text-sm mb-6 text-[#615E5E] group-hover:text-white">
              Aenean commodo nec ligula eget cum sociis dolor.
            </p>
            <div className="flex items-center">
              <div className="bg-black w-10 h-[2px] mr-2 group-hover:bg-white"></div>
              <p>READ MORE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLayout;
