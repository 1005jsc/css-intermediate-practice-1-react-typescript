import Carousel from '../components/Carousel/Carousel';
import Content from '../components/Content/Content';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import { heroOne, heroThree, heroTwo } from '../data/ContentData';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Carousel />
      <Footer />
    </>
  );
};
export default Home;
