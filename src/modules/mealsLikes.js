// function to update likes after button clicked
export const updateLikes = async (id, likes) => {
  try {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/e74v3gv4fqA3Iq80tG1r/likes/');
    const data = await response.json();
    /* eslint-disable */
    data.filter((item) => {
      likes.forEach((like) => {
        const cardId = like.parentElement.parentElement.id;
        if (item.item_id === cardId) {
          like.innerHTML = `${item.likes} likes`;
        } else {
          return '';
        }
      });
      return '';
    });
  } catch (e) {
    return e.message;
  }
  return '';
};
// function to post likes to API
export const addLike = async (id, likes) => {
  try {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/e74v3gv4fqA3Iq80tG1r/likes/', {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${id}`,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    updateLikes(id, likes);
  } catch (e) {
    return e.message;
  }
  return '';
};