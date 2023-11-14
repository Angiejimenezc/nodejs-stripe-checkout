import { Router } from "express";
import { createSession } from "../controllers/payment.controller.js";

const router = Router();

//ruta para crear la sesion de pago con stripe
router.post("/create-checkout-session", createSession);
//ruta para confirmar el pago
router.get("/success", async (req, res) => res.redirect("/success.html"));
//ruta para cancelar el pago
router.get("/cancel", async (req, res) => res.redirect("/cancel.html"));

export default router;
