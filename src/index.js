import _ from 'lodash';
import "./style.css";
import {getData} from "./modules/getData.js";
import {getLikes} from "./modules/getData.js";
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
//display likes number in homepage
getLikes().then((data) => {
  const likes =document.querySelectorAll('.likes-number')
  data.filter((item) => {
      likes.forEach((like)=>{
        let cardId = like.parentElement.parentElement.id
        if (item.item_id === cardId) {
          like.innerHTML = `${item.likes} likes`;
      }
      })
    });
//get likes ID when like button clicked
  const likeBtn = document.querySelectorAll('.like-heart')
  for(let i=0;i<likeBtn.length;i++){
    likeBtn[i].onclick = () => {
      const {id } = likeBtn[i].parentElement.parentElement;
      addLike(id, likes);
    };
  }
 
});
  document.querySelector('.grid').innerHTML = mealCard;
})
});