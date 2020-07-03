const levels = [
  { i: 'I', v: 'V', x: 'X' },
  { i: 'X', v: 'L', x: 'C' },
  { i: 'C', v: 'D', x: 'M' },
];

const calcDigit = (decAt, l) => {
  if (l > 2) {
    let str = '';
    for (let m = 1; m <= decAt * Math.pow(10, l - 3); m++) str += 'M';
    return str;
  } else if (decAt == 1) return levels[l].i;
  else if (decAt == 2) return levels[l].i + levels[l].i;
  else if (decAt == 3) return levels[l].i + levels[l].i + levels[l].i;
  else if (decAt == 4) return levels[l].i + levels[l].v;
  else if (decAt == 5) return levels[l].v;
  else if (decAt == 6) return levels[l].v + levels[l].i;
  else if (decAt == 7) return levels[l].v + levels[l].i + levels[l].i;
  else if (decAt == 8)
    return levels[l].v + levels[l].i + levels[l].i + levels[l].i;
  else if (decAt == 9) return levels[l].i + levels[l].x;
  else return '';
};

/**
 *
 * @param {number} dec
 * dec (decimal number) is required
 * and the function will return Roman version of the number
 *
 */

const roman = (dec) => {
  dec += '';
  let romanNum = '';
  for (let i = 0; i < dec.length; i++)
    romanNum += calcDigit(eval(dec.charAt(i)), dec.length - i - 1);
  return romanNum;
};

module.exports = roman;
