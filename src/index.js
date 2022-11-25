import './style.css';
import { getData, getLikes } from './modules/getData.js';
import { addLike } from './modules/mealsLikes.js';
// Get All meals Data
getData()
  .then((data) => {
    let mealCard = '';
    data.meals.forEach((elem) => {
      mealCard += `  
      <div id="${elem.idMeal}" class="card">
    <img src="${elem.strMealThumb}" alt="Sample photo">
    <div class="text">
      <h3>${elem.strMeal} </h3>
      <h4 class="likes-number">No likes</h4>
      <button class="like-heart">Like 👍</button>
      <button>Comment 💬</button>
    </div>
    </div>
`;
      // display likes number in homepage
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
        const likeBtn = document.querySelectorAll('.like-heart');
        likeBtn.forEach((btn) =>{
        btn.onclick = () => {
            const { id } = btn.parentElement.parentElement;
            addLike(id, likes);
          }
        })
        
      });
      document.querySelector('.grid').innerHTML = mealCard;
    });
  });