import Stripe from "stripe";
import { STRIPE_PRIVATE_KEY } from "../config.js";

const stripe = new Stripe(STRIPE_PRIVATE_KEY);

export const createSession = async (req, res) => {
  //creamos la sesion de pago con stripe
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          product_data: {
            name: "Laptop",
            description: "Laptop gamer",
          },
          currency: "usd",
          //el precio se multiplica por 100 porque stripe trabaja con centavos
          unit_amount: 2000,
        },
        quantity: 2,
      },
      {
        price_data: {
          product_data: {
            name: "TV",
            description: "SmartTV 4k",
          },
          currency: "usd",
          //el precio se multiplica por 100 porque stripe trabaja con centavos
          unit_amount: 10000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:4000/success",
    cancel_url: "http://localhost:4000/cancel",
  });
  return res.json(session);
};
