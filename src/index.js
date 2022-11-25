import './style.css';
import { getData, getLikes } from './modules/getData.js';
import { addLike } from './modules/mealsLikes.js';
import RenderComments from './modules/renderCommentsList.js';
import SubmitComment from './modules/submitComment.js';

// Get All meals Data
getData().then((data) => {
  const allItemsCounter = document.querySelector('.items-counter');
  allItemsCounter.innerText = `${data.meals.length} meals`;
  // Appending the mealas to the api
  let mealCard = '';
  data.meals.forEach((elem) => {
    mealCard += `  
      <div data-set="${elem.idMeal}" id="${elem.idMeal}" class="card">
        <img class="meal-img" src="${elem.strMealThumb}" alt="${elem.strMeal}">
        <div class="text">
          <h3>${elem.strMeal} ❤</h3>
          <h4 class="likes-number">No likes</h4>
          <button class="like-heart">Like 👍</button>
          <button class="view-comments">Comment 💬</button>
        </div>
      </div>
  `;
    // Get likes
    getLikes().then((data) => {
      const likes = document.querySelectorAll('.likes-number');
      /* eslint-disable */
      data.filter((item) => {
        likes.forEach((like) => {
          const cardId = like.parentElement.parentElement.id;
          if (item.item_id === cardId) {
            like.innerHTML = `${item.likes} likes`;
          }
        });
      });
      // get likes ID when like button clicked
      const likeBtn = document.querySelectorAll(".like-heart");
      likeBtn.forEach((btn) => {
        btn.onclick = () => {
          const { id } = btn.parentElement.parentElement;
          addLike(id, likes);
        };
      });
    });
  });
  document.querySelector(".grid").innerHTML = mealCard;

  // Popup logic
  const popup = document.querySelector(".popup");
  const closePopup = document.querySelector(".close-popup");
  const popupContent = document.querySelector(".popup-content");
  const viewComments = document.querySelectorAll(".view-comments");

  viewComments.forEach((btn) => {
    btn.addEventListener("click", () => {
      let popupMeal = "";
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
      popup.style.left = "0";
      // Popup close
      document.body.style.overflow = "hidden";
      closePopup.addEventListener("click", () => {
        popup.style.left = "-100%";
        document.body.style.overflow = "scroll";
      });
      // Passing the card id to the popup itself
      popup.setAttribute("data-set", cardId);
      // Rendering the comments method
      RenderComments.renderCommentsList(cardId);
    });
  });
});

// Submit a comment method
SubmitComment.commentSubmit();
