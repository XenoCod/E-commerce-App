import { useSession } from "next-auth/client";
import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import Fade from "react-reveal/Fade";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const items = useSelector(selectItems);
  const [session] = useSession();
  const total = useSelector(selectTotal);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    //Calling the backend to create a checkout session
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user.email,
    });

    // redirect customer to checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };

  console.log(items);
  return (
    <>
      <Fade right duration={700}>
        <div className="bg-gray-100">
          <Header />

          <main className="lg:flex  max-w-screen-2xl mx-auto">
            {/* Left */}
            <div className="flex-grow m-5 shadow-sm">
              <Image
                src="https://links.papareact.com/ikj"
                objectFit="contain"
                width={1020}
                height={250}
              />

              <div className="flex flex-col p-5 space-y-10 bg-white h-screen">
                <h1 className="text-3xl border-b pb-4">
                  {items.length == 0
                    ? "Your Amazon Basket is empty."
                    : "Shopping Basket"}
                </h1>

                {items.map((item, i) => (
                  <CheckoutProduct
                    key={i}
                    id={item.id}
                    title={item.title}
                    rating={item.rating}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                    hasPrime={item.hasPrime}
                  />
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col bg-white p-10 shadow-md">
              {items.length > 0 && (
                <div>
                  <h2 className="whitespace-nowrap">
                    Sub total ({items.length} items)
                  </h2>
                  <span className="font-bold">
                    <Currency currency="INR" quantity={total} />
                  </span>

                  <button
                    role="link"
                    onClick={createCheckoutSession}
                    disabled={!session}
                    className={`button mt-2 ${
                      !session &&
                      "  from-gray-300 to-gray-500 cursor-not-allowed border-gray-200"
                    }`}
                  >
                    {!session ? "Sign in to checkout" : "Proceed to checkout"}
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </Fade>
    </>
  );
}

export default Checkout;
