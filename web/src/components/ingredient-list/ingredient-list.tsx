import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { initialIngredients, Ingredient } from '../../models/ingredient';
import './ingredient-list.css';

const IngredientList = () => {
  const [ingredients, setIngredients] = useState(initialIngredients);

  useEffect(() => {
    // load the ingredients from the server
    axios('http://localhost:8080/api/ingredients').then((results) => {
      // map the results
      let mappedResults: Ingredient[] = [];
      for (let result of results.data) {
        if (!result.name) {
          continue;
        }

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

  const onVoteButtonClick = (ingredient: Ingredient) => {
    // send the vote to the server
  };

  return (
    <div>
      <h2>Ingredients</h2>
      <table>
        <tbody>
          {ingredients.map((ingredient) => (
            <tr key={ingredient.name}>
              <td>
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="ingredient-photo"
                />
              </td>
              <td>
                <h3>{ingredient.name}</h3>
              </td>
              <td>
                <button onClick={() => onVoteButtonClick(ingredient)}>
                  Vote!
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IngredientList;
