import express from "express";
import { register,login,logout} from "../controller/authController.js";
import {addToWatchlist, removeFromWatchlist,updateWatchlistItem} from "../controller/watchlistController.js"
import { authMiddleware } from "../middleware/authMiddleware.js";


const router = express.Router();

router.use(authMiddleware);
router.post("/login", login);
router.post("/",addToWatchlist);
router.post("/logout", logout);
router.delete("/:id",removeFromWatchlist);
router.put("/:id", updateWatchlistItem);

export default router;
