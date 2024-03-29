const Story = () => {
  return (
    <>
      <section className="px-6 flex flex-col items-center mt-24 lg:flex-row gap-x-10 max-w-[1400px] mx-auto">
        <div className="max-w-[520px] sm:mx-auto">
          <div className="flex items-center mb-4">
            <div className="bg-[#D7926B] w-14 h-[2px] mr-4"></div>
            <h4 className="text-[#D7926B]">OUR STORY</h4>
          </div>
          <h2 className="text-4xl font-semibold">Welcome To DesignDwell</h2>
          <h2 className="text-4xl font-semibold mb-10">Architects</h2>
          <p className="text-[#615E5E] leading-7 mb-10 ">
            The basic philosophy of our studio is to create individual,
            aesthetically stunning solutions for our customers by lightning-fast
            development of projects employing unique styles and architecture.
            Even if you don't have a ready sketch of what you want - we will
            help you to get the result you dreamed of.
          </p>
          <button className="text-sm bg-[#18130C] text-[#F9F6F6] px-12 py-4 outline-2 outline-red-600">
            DISCOVER MORE
          </button>
        </div>
        <div className="relative mt-20 w-[354px] sm:w-auto mx-auto">
          <img
            className="w-[315px] h-[350px] lg:w-[335px] lg:h-[390px] xl:w-[510px] xl:h-[600px] object-cover relative top-0 left-0"
            src="https://images.unsplash.com/photo-1614590354333-c72a209c78a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Home interior"
          />
          <img
            className="w-[177px] h-[220px] lg:w-[197px] lg:h-[240px] xl:w-[340px] xl:h-[420px] xl:top-72 object-cover absolute top-48 right-[-2px] sm:right-[-40px] border-4 border-white"
            src="https://images.unsplash.com/photo-1598911096723-af003b4ea77a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Home interior"
          />
        </div>
      </section>
      <div className="bg-[#f1c5ab] grid sm:grid-cols-2 lg:grid-cols-4 gap-y-16 py-36 px-12 justify-start">
        <div className="flex sm:justify-center">
          <h3 className="font-extrabold text-5xl mr-2">532</h3>
          <p>
            HAPPY <br /> CLIENTS
          </p>
        </div>
        <div className="flex sm:justify-center">
          <h3 className="font-extrabold text-5xl mr-2">48</h3>
          <p>
            YEARS OF <br /> EXPERIENCE
          </p>
        </div>
        <div className="flex sm:justify-center">
          <h3 className="font-extrabold text-5xl mr-2">76</h3>
          <p>
            AWARDS <br /> WINNING
          </p>
        </div>
        <div className="flex sm:justify-center">
          <h3 className="font-extrabold text-5xl mr-2">19</h3>
          <p>
            OFFICE <br /> WORLDWIDE
          </p>
        </div>
      </div>
    </>
  );
};

export default Story;
