const FeaturedWorksLayout = () => {
  return (
    <>
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
      <div className="flex mt-10 relative overflow-x-hidden">
        <img
          className="object-cover absolute w-[334px] h-[300px] md:w-[500px] md:h-[400px] -left-[300px] md:-left-[350px] lg:h-[500px] lg:-left-[250px] xl:h-[600px]"
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="interior home"
        />
        <img
          className="object-cover mx-auto w-[334px] sm:w-[60%] md:w-[55%] lg:w-[45%] xl:w-[55%] h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]"
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="interior home"
        />
        <img
          className="object-cover absolute w-[334px] h-[300px] md:w-[500px] md:h-[400px] -right-[300px] md:-right-[350px] lg:h-[500px] lg:-right-[250px] xl:h-[600px]"
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="interior home"
        />
      </div>
    </>
  );
};

export default FeaturedWorksLayout;
