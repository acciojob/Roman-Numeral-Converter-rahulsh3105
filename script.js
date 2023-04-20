function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1],
  };

  let result = '';
  let remainder = num;

  for (let i = 0; i <= 6; i++) {
    const [roman, value] = obj[i];
    const count = Math.floor(remainder / value);
    remainder = remainder % value;

    if (i % 2 === 0 && count === 4) {
      const prev = result.charAt(result.length - 1);
      const prevRoman = obj[i - 1][0];
      result = result.slice(0, -1);

      if (prev === prevRoman) {
        result += roman + obj[i - 2][0];
      } else {
        result += roman + prev;
      }
    } else {
      result += roman.repeat(count);
    }
  }

  return result;
}

//console.log(convertToRoman(36)); // prints XXXVI
// do not edit below this line
module.exports = convertToRoman
