import { getComments } from '../apis/requests.js';

class RenderComments {
  static renderCommentsList = async (cardId) => {
    // Get method to view the comments
    const comments = await getComments(cardId);
    const commentsList = document.querySelector('.comment-section');
    const commentsCount = document.querySelector('.comments-count');
    commentsCount.innerText = `Comments (${
      comments.length ? comments.length : '0'
    })`;
    commentsList.innerHTML = ''; /* eslint-disable */
    comments.length
      ? comments.forEach((comment) => {
          commentsList.innerHTML += `
      <li>${comment.creation_date} ${comment.username}: ${comment.comment}</li>
    `;
        })
      : "";
  };
}

export default RenderComments;
