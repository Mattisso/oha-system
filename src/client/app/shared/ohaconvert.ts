let ohaconvert = (function () {

  function isNum(value) {
    if (isNaN(value)) {
      value = 0;
    } else {
      return value;

    }

  }
  const spacer = {
    blank: function () {
      return '';
    },

    newLine: function () {
      return '\n';
    },

    line: function (length, character) {
      let characterIndex;

      let longString = '****************************************';
      longString += '----------------------------------------';
      longString += '========================================';
      longString += '++++++++++++++++++++++++++++++++++++++++';
      longString += '                                        ';

      length = Math.max(0, length);
      length = Math.min(40, length);

      characterIndex = longString.indexOf(character);

      if (characterIndex === -1) {
        characterIndex = 0;
      }

      return longString.substr(characterIndex, length);
    },

    wrap: function (text, length, character) {
      const padLength = length - text.length - 3;
      let wrapText = character + ' ' + text;
      wrapText += spacer.line(padLength, ' ');
      wrapText += character;
      return wrapText;
    },

    box: function (text, length, character) {
      let boxText = spacer.newLine();
      boxText += spacer.line(length, character) + spacer.newLine();
      boxText += spacer.wrap(text, length, character) + spacer.newLine();
      boxText += spacer.line(length, character) + spacer.newLine();
      return boxText;
    }
  };

  return {
    isNum: isNum,
    spacer: spacer

  };
})();
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ohaconvert;
}

