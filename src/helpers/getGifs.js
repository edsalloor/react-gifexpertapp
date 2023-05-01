import { GIPHY_API_KEY } from 'config';

export const getGifs = async category => {
  const queryParameters = `api_key=${GIPHY_API_KEY}&q=${encodeURI(category)}&limit=${10}`;
  const url = `https://api.giphy.com/v1/gifs/search?${queryParameters}`;

  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  return gifs;
};
