
import axios from 'axios';
let choices = [
  // { id: 1, name: 'rock', win: [3, 4], loose: [2, 5], image: 'rock.png' },
  // { id: 2, name: 'paper', win: [1, 5], loose: [3, 4], image: 'paper.png'},
  // { id: 3, name: 'scissors', win: [2, 4], loose: [1, 5], image: 'scissors.png' },
  // { id: 4, name: 'lizard', win: [2, 5], loose: [1, 3], image: 'lizard.png' },
  // { id: 5, name: 'spock', win: [1, 3], loose: [2, 4], image: 'spock.png' }
];

export const getChoices = async () => {
  try {
    if (!choices.length) {
      const { data } = await axios.get('https://codechallenge.boohma.com/choices');
      choices = data;
    }
  } catch(e) {
    console.log(e);
  }

  return choices;
};

export const getChoice = async () => {
  try {
    const { data } = await axios.get('https://codechallenge.boohma.com/choice');
    console.log(data);
    choices = data;
  } catch(e) {
    console.log(e);
  }

  return choices;
};
