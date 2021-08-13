export const getPhotos = async () => {
  try {
    const data = await fetch(
      'https://api.unsplash.com/photos/?client_id=KwT3137_CeotLKbe8cDYjFNj_foFrLN__v9tVvrmIEk&page=3&per_page=20',
    );
    const res = await data.json();
    return res;
  } catch (e) {
    console.log(e);
  }
};
