import './style.css';
import getData from './moduled/getData.js';

// Get All meals Data
getData()
  .then((data) => {
    let mealCard = '';
    data.meals.forEach((elem) => {
      mealCard += `  
    <div class="card">
    <img src="${elem.strMealThumb}" alt="Sample photo">
    <div class="text">
      <h3>${elem.strMeal} ❤</h3>
      <h5 class="likes">2 likes</h5>
      <button>Comment</button>
    </div>
    </div>
`;
    });
    document.querySelector('.grid').innerHTML = mealCard;
  });
