import express from "express";
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
} from "../controllers/room.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREAT
router.post("/:hotelid", verifyAdmin, createRoom);
//UPDATE USER
router.put("/:id", verifyAdmin, updateRoom);

//DELETE ROOM
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//GET USER
router.get("/:id", verifyUser, getRoom);

//GET ALL USER
router.get("/", verifyAdmin, getRooms);

export default router;
