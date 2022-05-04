const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase
}

PangramFinder.prototype.isPangram = function () {
  lowerCasePhrase = this.phrase.toLowerCase()

  result = this.alphabet.every((letter) => {
    return lowerCasePhrase.includes(letter)
  })

  return result
  
}

module.exports = PangramFinder;
