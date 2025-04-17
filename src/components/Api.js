const API_URL = 'https://trip-wiki-api.vercel.app/';

export const request = async (startIndex, region, sortBy, searchWord) => {
  try {
    let url = `${API_URL}`;
    if (region && region !== 'All') {
      url += region;
    }
    url += `?start=${startIndex}${sortBy ? '&sort=' + sortBy : ''}${searchWord ? '&search=' + searchWord : ''}`;

    const response = await fetch(url);
    if (response) {
      let data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}