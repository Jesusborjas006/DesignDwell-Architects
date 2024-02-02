const Story = () => {
  return (
    <section className="flex justify-center mt-24 mx-28 gap-x-20">
      <div className="w-[50%]">
        <h4 className=" text-[#D7926B] mb-4">Our Story</h4>
        <h2 className="text-4xl font-semibold">Welcome To DesignDwell</h2>
        <h2 className="text-4xl font-semibold mb-10">Architects</h2>
        <p className="text-[#615E5E] leading-7 mb-10">
          The basic philosophy of our studio is to create individual,
          aesthetically stunning solutions for our customers by lightning-fast
          development of projects employing unique styles and architecture. Even
          if you don't have a ready sketch of what you want - we will help you
          to get the result you dreamed of.
        </p>
        <button className="text-sm bg-[#18130C] text-[#F9F6F6] px-12 py-4 outline-2 outline-red-600">
          DISCOVER MORE
        </button>
      </div>
      <div className="border border-red-500 w-[50%] relative">
        <img
          className="w-[530px] h-[620px] object-cover"
          src={
            "https://images.unsplash.com/photo-1614590354333-c72a209c78a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Home interior"
        />
        <img
          className="w-[430px] h-[530px] object-cover absolute top-44 right-20 border-4 border-white "
          src={
            "https://images.unsplash.com/photo-1598911096723-af003b4ea77a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Home interior"
        />
      </div>
    </section>
  );
};

("https://images.unsplash.com/photo-1598911096723-af003b4ea77a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

export default Story;
