export interface Ingredient {
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

export const initialIngredients: Ingredient[] = [
  {
    name: 'Roasted chicken',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3HWyvSSc2uPJ1PxMEKcSSkidwE5H6YyjVFNjEca9vQVO54TC9&s',
    holdingTemperature: 140,
    hopper: 'auger feeder',
    dispenseGrams: 80,
    usedBy: 'Harvest Bowl',
    demandKg: 27.2,
    densityKgM3: 1121,
    capacityL: 24.3,
  },
  {
    name: 'sweet potatoes',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/180802-delish-9x13-bookazine-00360-1533324368.jpg',
    holdingTemperature: 140,
    hopper: 'vibratory pan',
    dispenseGrams: 39,
    usedBy: 'Harvest Bowl',
    demandKg: 7.1175,
    densityKgM3: 270,
    capacityL: 26.4,
  },
];
