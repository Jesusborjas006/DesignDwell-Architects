import avatarImg from "../assets/avatar-2.jpg";

const TeamLayout = () => {
  return (
    <section className="mt-24 px-6">
      <div className="flex sm:flex-col items-center mb-4">
        <div className="bg-[#D7926B] w-14 sm:w-24 h-[2px] mr-4 sm:mr-0 sm:mb-4"></div>
        <h4 className="text-[#D7926B]">PROFFESIONALS</h4>
      </div>
      <h2 className="text-4xl font-semibold sm:text-center">Our Team</h2>
      <div className="grid grid-cols-2 mt-10 gap-8 md:grid-cols-4 max-w-[1350px] mx-auto">
        <div>
          <img src={avatarImg} alt="Woman avatar" />
          <p className="text-[#D7926B] text-sm mt-4">INTERIOR DESIGNER</p>
          <p className="font-semibold sm:text-base md:text-lg">Jenny Wilson</p>
        </div>
        <div>
          <img src={avatarImg} alt="Woman avatar" />
          <p className="text-[#D7926B] text-sm mt-4">INTERIOR DESIGNER</p>
          <p className="font-semibold sm:text-base md:text-lg">Jenny Wilson</p>
        </div>
        <div>
          <img src={avatarImg} alt="Woman avatar" />
          <p className="text-[#D7926B] text-sm mt-4">INTERIOR DESIGNER</p>
          <p className="font-semibold sm:text-base md:text-lg">Jenny Wilson</p>
        </div>
        <div>
          <img src={avatarImg} alt="Woman avatar" />
          <p className="text-[#D7926B] text-sm mt-4">INTERIOR DESIGNER</p>
          <p className="font-semibold sm:text-base md:text-lg">Jenny Wilson</p>
        </div>
      </div>
    </section>
  );
};

export default TeamLayout;
