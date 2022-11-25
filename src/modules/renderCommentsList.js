import { getComments } from '../apis/requests.js';

class RenderComments {
  static renderCommentsList = async (cardId) => {
    // Get method to view the comments
    const comments = await getComments(cardId);
    const commentsList = document.querySelector('.comment-section');
    this.commentsCount(comments);

    commentsList.innerHTML = ''; /* eslint-disable */
    comments.length
      ? comments.forEach((comment) => {
          commentsList.innerHTML += `
      <li>${comment.creation_date} ${comment.username}: ${comment.comment}</li>
    `;
        })
      : "";
  };

  static commentsCount(comments = []) {
    const commentsCount = document.querySelector(".comments-count");
    commentsCount.textContent = comments?.length ? comments.length : 0;

    return comments;
  }
}

export default RenderComments;
