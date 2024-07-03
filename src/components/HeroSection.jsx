import "swiper/css/bundle";
import { listings } from "../assets/listings";
import Itme from "./Itme";
const HeroSection = () => {
  return (
    <div className="py-8">
      <div className="w-4/6 mx-auto">
        <div className="text-3xl semi-bold pb-3">Recent Offers</div>
        <div className="text-sm test-slate-600">
          Find the suitable apartment for you
        </div>
      </div>
      <div className="w-10/12 mx-auto p-5 ">
        {listings && listings.length > 0 && (
          <div className="flex flex-wrap justify-center p-3  gap-4">
            {listings.map((listing) => (
              <Itme listing={listing} key={listing._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
