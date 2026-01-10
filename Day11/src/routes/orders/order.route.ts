import express from "express";
import { authMiddleware, restrictTo, Role } from "../../middleware/auth.middleware.js";
import createOrder from "../../controllers/orders/order.controller.js";

const orderRouter = express.Router();

orderRouter.route("/orders")
.post(authMiddleware,restrictTo(Role.Admin), createOrder);

export default orderRouter;
