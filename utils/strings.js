module.exports = {
  reverse: function(str) {
    return str
      .split("")
      .reverse()
      .join("");
  },

  countLetters: function(str) {
    const map = {};
    str.split("").forEach(letter => {
      if (!map[letter]) map[letter] = 0;
      map[letter]++;
    });
    return map;
  },

  difference: function(str1, str2) {
    let diff = 0;
    for (let i = 0, l = Math.max(str1.length, str2.length); i < l; i++) {
      if (str1[i] !== str2[i]) diff++;
    }

    return diff;
  },

  common: function(str1, str2) {
    let out = "";
    for (let i = 0, l = Math.max(str1.length, str2.length); i < l; i++) {
      if (str1[i] === str2[i]) out += str1[i];
    }

    return out;
  },
};
