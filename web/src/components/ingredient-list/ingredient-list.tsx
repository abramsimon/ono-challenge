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
          hopper: result.hopper,
          dispenseGrams: result.dispense_grams,
          usedBy: result.used_by,
          demandKg: result.demmand_kg,
          densityKgM3: result['density_kgm^3'],
          capacityL: result.capacity_L,
        });
      }

      setIngredients(mappedResults);
    });
  }, []);

  const onVoteButtonClick = (ingredient: Ingredient) => {
    // send the vote to the server
    axios
      .put(`http://localhost:8080/api/ingredients/${ingredient.name}/vote`)
      .then((results) => {
        console.log('put ', results.data);
      });
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
              <td>{ingredient.holdingTemperature}</td>
              <td>{ingredient.hopper}</td>
              <td>{ingredient.dispenseGrams}</td>
              <td>{ingredient.usedBy}</td>
              <td>{ingredient.demandKg}</td>
              <td>{ingredient.densityKgM3}</td>
              <td>{ingredient.capacityL}</td>
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
