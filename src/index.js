const VOWELS = 'aeiouyäöå';
const CONSONANTS = 'bcdfghjklmnpqrstvxz';
const DIPTHONGS = [
  'ai', 'ei', 'oi', 'äi', 'öi',
  'ey', 'äy', 'öy', 'au', 'eu',
  'ou', 'ui', 'yi', 'iu', 'iy',
  'ie', 'uo', 'yö',
];

const isIn = set => c => c && set.indexOf(c.toLowerCase()) >= 0;

// #isVowel(c)
//    True if given char is a vowel.
//
const isVowel = isIn(VOWELS);

// #isConsonant(c)
//    True if given char is a consonant.
//
const isConsonant = isIn(CONSONANTS);

// #isDipthong(string)
//    True if given string is dipthong.
const isDipthong = (s) => {
  for (let i = 0; i < DIPTHONGS.length; i += 1) {
    if (DIPTHONGS[i] === s) return true;
  }

  return false;
};

// #tavuta()
//    Tavuttaa suomenkielisen sanan (niin hyvin kuin osaa).
//
export default function tavuta(s) {
  let end = s.length;
  const res = [];

  for (let i = s.length - 1; i >= 0; i -= 1) {
    const subs = s.substring(i, end);

    if (i === 0) {
      res.push(subs);
    } else if (isConsonant(subs[0]) && isVowel(subs[1])) {
      res.push(subs);
      end = i;
    } else if (isVowel(subs[0]) && isVowel(subs[1])) {
      if (subs[0] !== subs[1] && !isDipthong(subs)) {
        res.push(subs.substring(1));
        end = i + 1;
      }
    }
  }

  return res.reverse();
}
