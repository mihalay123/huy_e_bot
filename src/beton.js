import { wordEditor } from './wordEditor';

//const greeting = 'hello it\'s Beton bot';

export const beton = (text) => {
  const words = text.split(' ');
  const editedWords = words.map(wordEditor);
  return editedWords.join(' ');
};



/*export const beton = (text) => {
  if (text.split(' ').length !== 1) 
    throw new Error('bot suports only one word');
  const newWord = wordEditor(text);
  return newWord;
};*/