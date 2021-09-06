export const getPhotos = async (
  value: string,
  page: number,
  searchValue: string = '',
) => {
  const orderForPhoto = value === 'TopPhoto' ? 'popular' : 'latest';
  const queryValue = searchValue && `&query=${searchValue}`;
  const randomPhotoFromUrl = `https://api.unsplash.com/photos/random/?client_id=FGjDo_jfpdBQxxOBnRTRqKdWst8xPbBaz-n3AKXXEoA&count=20${queryValue}`;
  const photoFromUrl = `https://api.unsplash.com/photos/?client_id=FGjDo_jfpdBQxxOBnRTRqKdWst8xPbBaz-n3AKXXEoA&page=${page}&per_page=20&order_by=${orderForPhoto}`;
  const data = await fetch(
    value === 'Photos' ? randomPhotoFromUrl : photoFromUrl,
  );
  const res = await data.json();
  return res;
};
