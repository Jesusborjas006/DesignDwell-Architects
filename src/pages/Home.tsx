import FeaturedWorksLayout from "../layout/FeaturedWorksLayout";
import Hero from "../layout/Hero";
import ServiceLayout from "../layout/ServiceLayout";
import Story from "../layout/Story";

const Home = () => {
  return (
    <>
      <Hero />
      <Story />
      <ServiceLayout />
      <FeaturedWorksLayout />
    </>
  );
};

export default Home;
