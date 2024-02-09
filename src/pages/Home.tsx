import FeaturedWorksLayout from "../layout/FeaturedWorksLayout";
import GetInTouch from "../layout/GetInTouch";
import Hero from "../layout/Hero";
import ServiceLayout from "../layout/ServiceLayout";
import Story from "../layout/Story";
import TeamLayout from "../layout/TeamLayout";

const Home = () => {
  return (
    <>
      <Hero />
      <Story />
      <ServiceLayout />
      <FeaturedWorksLayout />
      <GetInTouch />
      <TeamLayout />
    </>
  );
};

export default Home;
