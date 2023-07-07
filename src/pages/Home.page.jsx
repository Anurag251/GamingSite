import BannerComponent from "../components/Banner.component";
import CustomTitleComponent from "../components/CustomTitle.component";
import HowItWorkComponent from "../components/HowItWork.component";
import OtherGamesComponent from "../components/OtherGames.component";
import RatingComponent from "../components/Rating/Rating.component";
import TournamentPlatformComponent from "../components/TournamentPlatform.component";
import WhyGamersLoveComponent from "../components/WhyGamersLove.component";
import WithdrawalComponent from "../components/Withdrawal.component";
import JoinUsComponent from "../components/JoinUs.component";

import withdrawBg from "../assets/images/withdrawals-bg.webp";
import downloadBg from "../assets/images/download-reminder-bg.webp";
import DownloadComponent from "../components/Download.component";
import FAQsComponent from "../components/FAQs/FAQs.component";
import HowToDownloadComponent from "../components/HowToDownload/HowToDownload.component";

const HomePage = () => {
  return (
    <div className="home-page">
      <OtherGamesComponent />

      <BannerComponent />

      <TournamentPlatformComponent />

      <section>
        <CustomTitleComponent>
          How does <br /> <i>SoStronk</i> work?
        </CustomTitleComponent>

        <HowItWorkComponent />
      </section>

      <section className="bg">
        <CustomTitleComponent>
          Why Gamers <br /> <i>Love</i> SoStronk?
        </CustomTitleComponent>

        <WhyGamersLoveComponent />
      </section>

      <section>
        <CustomTitleComponent>
          Hear it from
          <br /> the <i>Gamers</i>
        </CustomTitleComponent>

        <RatingComponent />
      </section>

      <section
        style={{ backgroundImage: `url(${withdrawBg})` }}
        className="bgImage Withdrawal-section"
      >
        <CustomTitleComponent>
          Instant
          <br /> <i>withdrawal</i>
        </CustomTitleComponent>

        <WithdrawalComponent />
      </section>

      <section className="JoinUs-sec">
        <JoinUsComponent />
      </section>

      <section
        style={{ backgroundImage: `url(${downloadBg})` }}
        className="bgImage Download-sec"
      >
        <CustomTitleComponent
          desc={`Just in case you missed it, <br /> download and win big!`}
        >
          <i>Psst!</i>
        </CustomTitleComponent>

        <DownloadComponent />
      </section>

      <section>
        <CustomTitleComponent>
          FREQUENTLY ASKED
          <br /> <i>QUESTIONS</i>
        </CustomTitleComponent>

        <FAQsComponent />
      </section>

      <section>
        <CustomTitleComponent>
          How do I
          <br /> <i>Download?</i>
        </CustomTitleComponent>

        <HowToDownloadComponent />
      </section>
    </div>
  );
};

export default HomePage;
9851082842;
