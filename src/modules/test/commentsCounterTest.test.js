import Render from '../renderCommentsList.js';

describe('Count test', () => {
  test('should count comments number', () => {
    document.body.innerHTML = "<h3>Comments (<span class='comments-count'></span>)</h3>";
    const array = [
      { creation_date: '2022-11-24', username: 'zenib', comment: 'good' },
      { creation_date: '2022-11-24', username: 'batrek', comment: 'bad' },
    ];

    Render.commentsCount(array);
    const comment = document.querySelector('.comments-count').textContent;

    expect(Number(comment)).toEqual(2);
  });
});
