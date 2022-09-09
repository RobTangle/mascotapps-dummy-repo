import pets from "./pets.json";
import { Pet, NewPetEntry } from "../types";

const allThePets: Array<Pet> = pets as Array<Pet>;

export function getAllPets(): Array<Pet> | undefined {
  let allPets = allThePets;
  return allPets;
}

export function addNewPet(newPetEntry: any): NewPetEntry {
  const newPet = {
    id: Math.max(...allThePets.map((p) => p.id)) + 1,
    ...newPetEntry,
  };
  allThePets.push(newPet);
  return newPet;
}
