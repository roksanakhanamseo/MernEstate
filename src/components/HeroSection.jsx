import "swiper/css/bundle";
import { listings } from "../assets/listings";
import LocalItem from "./LocalItem";

const HeroSection = () => {
  let rentItems = [];
  let saleItems = [];
  listings.map((item) => {
    if (item.type === "sale") {
      saleItems.push(item);
    } else if (item.type === "rent") {
      rentItems.push(item);
    }
  });

  return (
    <div>
      <div className="py-4 mt-4">
        <div className="w-4/6 mx-auto">
          <div className="text-3xl semi-bold pb-3">Recent Sale Offers</div>
          <div className="text-sm test-slate-600">
            Find the suitable apartment for you
          </div>
        </div>
        <div className="w-10/12 mx-auto p-5 ">
          {listings && listings.length > 0 && (
            <div className="flex flex-wrap justify-center p-3  gap-4">
              {saleItems.map((listing) => (
                <LocalItem listing={listing} key={listing._id} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="pb-4 pt-2">
        <div className="w-4/6 mx-auto">
          <div className="text-3xl semi-bold pb-3">Recent Rent Offers</div>
          <div className="text-sm test-slate-600">
            Find the Flexible apartment for you
          </div>
        </div>
        <div className="w-10/12 mx-auto p-5 ">
          {listings && rentItems.length > 0 && (
            <div className="flex flex-wrap justify-center p-3  gap-4">
              {rentItems.map((listing) => (
                <LocalItem listing={listing} key={listing._id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
