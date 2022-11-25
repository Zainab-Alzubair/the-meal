// Get all meals data from API
export const getData = async () => {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef',
    );
    const meals = await response.json();
    return meals;
  } catch (e) {
    return e.message;
  }
};

// get all likes from API
export const getLikes = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/e74v3gv4fqA3Iq80tG1r/likes',
  );
  const data = await response.json();
  return data;
};
