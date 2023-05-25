/** 
 * Handles any string. Word delimiters are identified by spaces, comma, semicolon, dot, _ or -
 * The first word is kept intact.
 * 
 * Eg: 
 * Input: the_brown_fox-jumps_over-the-lazy_dog 
 * Expected output: theBrownFoxJumpsOverTheLazyDog
*/
export function toCamelCase(str: string){
  if(str === '' || !str) {
    return '';
  }

  const [firstWord, ...rest] = str.split(/[\-\_ ,\.\;]/);
  return firstWord + rest.map((word =>  word.replace(/\b(\w)/, toUpperCaseWord))).join('');
}

function toUpperCaseWord(_match: string, p1: string) {
  return p1.toUpperCase();
}
