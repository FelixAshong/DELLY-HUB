import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_live_51Ojg8JLlqmts8T3gwHcDnep0aQNP0tb2qUODCMjgSeSMus3qLmp3kIu43p0ZBRGDEpwpRGhFuvU7Kv8DE8b7mdYv0094ckJFs3"
    );
  }
  return stripePromise;
};
