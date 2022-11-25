//Get all meals data from API
export const getData = async () => {
  try {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
  const meals = await response.json();
  return meals;
} catch (e) {
  return e.message;
}
};

//Set counter for all meals in navbar
getData().then((data) => {
  let count = 0
  const mealsCount = document.getElementById('meals-count')
    for(let i =0; i<data.length;i+=1){
      count+=1
    }
    mealsCount.innerHTML=`Meals  `+'('+count+')'
  })
//get all likes from API
export const getLikes = async () => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/e74v3gv4fqA3Iq80tG1r/likes');
    const data = await response.json();
    return data
  };
  
