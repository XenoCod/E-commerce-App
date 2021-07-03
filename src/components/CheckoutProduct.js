import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function CheckoutProduct({
  key,
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();
  //   Adding Items to Basket
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };
  // Removing iteems from Basket
  const removItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div data-aos="slide-up" className="grid grid-cols-5 bg-white">
      <Image src={image} objectFit="contain" width={200} height={200} />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="  text-base my-2 line-clamp-3">{description}</p>

        <p className="  text-base lg:text-2xl">
          <Currency currency="INR" quantity={price} />
        </p>

        {hasPrime && (
          <div>
            <img
              loading="lazy"
              alt=" Has Prime"
              className="w-12"
              src="https://links.papareact.com/fdw"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* Right */}
      <div className="flex flex-col   space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
