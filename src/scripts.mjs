
export const createPassword = (options) => {
  const charMap = createMap(options.specialCharacter);
  const maxKey = options.specialCharacter ? 3 : 2


  let passoword = '';
  for(let i = 0; i < options.size; i++){
    const key = getRandomInt(1, maxKey)
    const selectedArr = charMap.get(key)
    let selectedChar = selectedArr[getRandomInt(0, (selectedArr.length - 1))]

    const turnUpperCase = getRandomInt(1, 2)
    if(key === 1 && turnUpperCase === 2) {
      selectedChar = selectedChar.toUpperCase();
    } 

    passoword = passoword.concat(selectedChar)

  }
  
  console.log(`Your password: ${passoword}`)
}

const createMap = (includeSpecialChar) => {
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
  const numbers = Array.from({ length: 10 }, (_, i) => i);  

  const charMaps = new Map()
  charMaps.set(1, alphabet)
  charMaps.set(2, numbers)

  if(includeSpecialChar) {
    const specialChar = [ '!', '#', '$', '%', '&', '*', '+', '@' ]
    charMaps.set(3, specialChar)
  }
  
  return charMaps;
}


const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}