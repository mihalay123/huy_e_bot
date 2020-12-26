const vowelsList = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];


const cutStart = (word) => {
  let write = false;
  return word.reduce((acc, char) => {
    if (write === true) {
      return [...acc, char];
    }
    if (vowelsList.includes(char)) {
      write = true;
      return [char];
    }
  }, ['']);
};

const addDick = (tail) => {
  const prefix = 'ху';
  const [first, ...rest] = tail;
  let vowel = ''

  switch (first) {
    case 'а':
      vowel = 'я';
      break;

    case 'о':
      vowel = 'ё';
      break;

    case 'э':
      vowel = 'е';
      break;

    case 'ы':
      vowel = 'и';
      break;

    case 'у':
      vowel = 'ю';
      break;

    default:
      vowel = first;
      break;
  }
  return `${prefix}${vowel}${rest.join('')}`;
};

export const wordEditor = (str) => {
  const word = str.split('');
  const tail = cutStart(word);
  if (tail === undefined) 
    throw new Error('Поддерживаются только русские слова');
  if (str.toLowerCase().startsWith('ху') && vowelsList.includes(word[2])) 
    throw new Error('Хуй уже пришит');
  const result = addDick(tail)
  return result;
};
