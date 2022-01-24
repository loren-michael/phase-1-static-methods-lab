class Formatter {

  static capitalize(str) {
    return str[0].toUpperCase() + str.substring(1)
  }

  static sanitize(str) {
    return str.replace(/[&\/\\#^+()$~%.":*?<>{}!@]/g, '')
  }

  static titleize(str) {
    const excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const splitStr = str.split(' ');
    let newStr = [];
    for (let i = 0; i < splitStr.length; i++)
    {
      if (i === 0 || !excludedWords.includes(splitStr[i]))
      {
        newStr.push(this.capitalize(splitStr[i]));
      }
      else
      {
        newStr.push(splitStr[i]);
      }
    }
    return newStr.join(' ');
  }
}
