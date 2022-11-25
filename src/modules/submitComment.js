import { postMethod } from '../apis/requests.js';
import RenderComments from './renderCommentsList.js';

class SubmitComment {
  static commentSubmit() {
    const formComment = document.querySelector('#comment-form');
    formComment.addEventListener('submit', async (e) => {
      e.preventDefault();
      const cardId = formComment.parentElement.parentElement.dataset.set;
      const userName = formComment.children[1].value;
      const insight = formComment.children[2].value;
      // Post method to set comments

      await postMethod({
        item_id: cardId,
        username: userName,
        comment: insight,
      });

      RenderComments.renderCommentsList(cardId);
      formComment.reset();
    });
  }
}

export default SubmitComment;
