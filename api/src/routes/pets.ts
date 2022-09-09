import express from "express";
import * as petServices from "../services/petServices";
// import { Pet } from "../types";
import { toNewPetEntry } from "../petUtils";

const router = express.Router();

router.get("/", (_req, res) => {
  console.log("Entré al get de pets");
  try {
    let allPets = petServices.getAllPets();
    return res.status(200).send(allPets);
  } catch (error: any) {
    return res.status(404).send(error.message);
  }
});

router.post("/", (req, res) => {
  console.log("entré al post de pets");
  console.log("req.body: ");
  console.log(req.body);
  try {
    const newPetEntry = toNewPetEntry(req.body);
    const addedPetEntry = petServices.addNewPet(newPetEntry);
    return res.status(200).send(addedPetEntry);
  } catch (error: any) {
    return res.status(400).send(error.message);
  }
});

export default router;
