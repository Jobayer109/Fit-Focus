import AboutSection from "../../Components/AboutSection/AboutSection";
import Banner from "../../Components/Banner/Banner";
import FeatureSection from "../../Components/FeatureSection/FeatureSection";
import FeaturedClasses from "../../Components/FeaturedClasses/FeaturedClasses";
import LatestCommunity from "../../Components/LatestCommunity/LatestCommunity";
import NewsletterSection from "../../Components/NewsletterSection/NewsletterSection";
import ReviewSection from "../../Components/ReviewSection/ReviewSection";
import TrainerSection from "../../Components/TrainerSection/TrainerSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutSection />
      <FeatureSection />
      <FeaturedClasses />
      <TrainerSection />
      <LatestCommunity />
      <ReviewSection />
      <NewsletterSection />
    </div>
  );
};

export default Home;
