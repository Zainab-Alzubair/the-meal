const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.MEALS_API_ID_MOHAMED}/comments`;

export const postMethod = async (data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-type': 'application/json',
    },
    redirect: 'follow',
    body: JSON.stringify(data),
  });
  return response;
};

export const getComments = async (itemID) => {
  const data = await fetch(`${url}?item_id=${itemID}`);
  return data.json();
};
