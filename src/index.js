import './style.css';
import getData from './modules/getData.js';
import RenderComments from './modules/renderCommentsList.js';
import SubmitComment from './modules/submitComment.js';

// Get All meals Data
getData().then((data) => {
  // Appending the mealas to the api
  let mealCard = '';
  data.meals.forEach((elem) => {
    mealCard += `  
      <div data-set="${elem.idMeal}" class="card">
        <img class="meal-img" src="${elem.strMealThumb}" alt="${elem.strMeal}">
        <div class="text">
          <h3>${elem.strMeal} ❤</h3>
          <button class="view-comments">Comments</button>
        </div>
      </div>
  `;
  });
  document.querySelector('.grid').innerHTML = mealCard;
  // Popup logic
  const popup = document.querySelector('.popup');
  const closePopup = document.querySelector('.close-popup');
  const popupContent = document.querySelector('.popup-content');
  const viewComments = document.querySelectorAll('.view-comments');

  viewComments.forEach((btn) => {
    btn.addEventListener('click', () => {
      let popupMeal = '';
      const cardId = btn.parentElement.parentElement.dataset.set;
      const filtredMeal = data.meals.filter((meal) => meal.idMeal === cardId);
      popupMeal = `
          <img class="popup-img" src="${filtredMeal[0].strMealThumb}" alt="${filtredMeal[0].strMeal}">
          <div class="text">
            <h3>${filtredMeal[0].strMeal} ❤</h3>
          </div>
      `;
      // Popup reveal
      popupContent.innerHTML = popupMeal;
      popup.style.left = '0';
      // Popup close
      document.body.style.overflow = 'hidden';
      closePopup.addEventListener('click', () => {
        popup.style.left = '-100%';
        document.body.style.overflow = 'scroll';
      });
      // Passing the card id to the popup itself
      popup.setAttribute('data-set', cardId);
      // Rendering the comments method
      RenderComments.renderCommentsList(cardId);
    });
  });
});

// Submit a comment method
SubmitComment.commentSubmit();
