import PersonCard from "../components/Home/PersonCard";
import { ConsoleBot, PortfolioBanner } from "../shared";

const Home = () => {
  return (
    <>
      <PersonCard />
      <ConsoleBot/>
      <PortfolioBanner />
    </>
  );
};

export default Home;
