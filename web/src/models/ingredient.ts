export default interface Ingredient {
  name: string;
  image: string;
  holdingTemperature: number;
  hopper: string;
  dispenseGrams: number;
  usedBy: string;
  demandKg: number;
  densityKgM3: number;
  capacityL: number;
}
