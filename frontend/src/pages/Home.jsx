import CategoryRecommendations from "../components/CategoryRecommendations";
import CategoryPromotion from "../components/CategoryPromotion";
import MembershipBanner from "../components/MembershipBanner";
import OutfitRecommendations from "../components/OutfitRecommendations";

export default function Home() {
  return (
    <>
      <CategoryRecommendations />
      <CategoryPromotion />
      <hr className="my-8 border-gray-200" />
      <MembershipBanner />
      <OutfitRecommendations />
    </>
  );
}
