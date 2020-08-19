import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { initialIngredients, Ingredient } from '../../models/ingredient';
import './ingredient-list.css';

const IngredientList = () => {
  const [ingredients, setIngredients] = useState(initialIngredients);

  useEffect(() => {
    axios('http://localhost:8080/api/ingredients').then((results) => {
      // map the results
      let mappedResults: Ingredient[] = [];
      for (let result of results.data) {
        mappedResults.push({
          name: result.name,
          image: result.image,
          holdingTemperature: result.holding_temperature,
          hopper: '',
          dispenseGrams: 0,
          usedBy: '',
          demandKg: 0,
          densityKgM3: 0,
          capacityL: 0,
        });
      }

      setIngredients(mappedResults);
    });
  }, []);

  return (
    <div>
      <h2>Ingredients</h2>
      <table>
        {ingredients.map((ingredient) => (
          <tr>
            <td>
              <img src={ingredient.image} className="ingredient-photo" />
            </td>
            <td>
              <h3>{ingredient.name}</h3>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default IngredientList;
