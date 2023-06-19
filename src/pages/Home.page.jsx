import BannerComponent from "../components/Banner.component";
import CustomTitleComponent from "../components/CustomTitle.component";
import HowItWorkComponent from "../components/HowItWork.component";
import OtherGamesComponent from "../components/OtherGames.component";
import TournamentPlatformComponent from "../components/TournamentPlatform.component";
import WhyGamersLoveComponent from "../components/WhyGamersLove.component";

const HomePage = () => {
  return (
    <div className="home-page">
      <OtherGamesComponent />

      <BannerComponent />

      <TournamentPlatformComponent />

      <section>
        <CustomTitleComponent>
          How does <br /> SoStronk work?
        </CustomTitleComponent>

        <HowItWorkComponent />
      </section>

      <section className="bg">
        <CustomTitleComponent>
          Why Gamers <br /> Love SoStronk?
        </CustomTitleComponent>

        <WhyGamersLoveComponent />
      </section>
    </div>
  );
};

export default HomePage;
9851082842;
