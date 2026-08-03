import Console from "./Console";
import HeroText from "./HeroText";

const Home = () => {
  return (
    <section className="h-full bg-[#1a1a1a] text-white flex flex-col">

      <div className="flex-1 flex items-center">
        <div className="w-full grid md:grid-cols-12 items-center">
          <HeroText />
          <Console />
        </div>
      </div>	


    </section>
  );
};

export default Home;