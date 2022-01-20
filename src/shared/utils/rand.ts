import axios from 'axios';

export const rand = async () => {
  try {
    const { data: { random_number } } = await axios.get('https://codechallenge.boohma.com/random');

    return random_number;
  } catch(e) {
    console.log(e);

    return -1;
  }
};
