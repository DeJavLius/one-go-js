const API_URL = 'https://animal-api-two.vercel.app/';

export const request = async (name) => {
  console.log(name);
  console.log(typeof name);
  // name = name !== '' ? name.replace('Animal-Album/', '') : '';
  let res = await fetch(name ? `${API_URL}${name}` : API_URL);
  try {
    if (res) {
      let data = await res.json();
      return data.photos;
    }
  } catch (err) {
    console.log(err);
  }
};